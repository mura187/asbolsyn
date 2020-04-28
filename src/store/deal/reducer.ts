import { combineReducers } from 'redux';
import { ActionType, ILoadTypes } from 'src/store/types';
import { GET_ACTIVE_DEALS, GET_PRODUCER_DEALS } from 'src/store/deal/types';
import { IItem } from 'src/store/data.types';
import { CardItemTypes } from 'src/components/molecules/CardItem/types';

export const parseDealsData = (raw: IItem): CardItemTypes.IProps => ({
  id: raw.id,
  foodName: raw.food_name,
  producerId: raw.producer_id,
  producerName: raw.producer_name,
  consumerName: raw.consumer_name,
  price: raw.price,
  initialQuantity: raw.initial_quantity,
  availableQuantity: raw.available_quantity,
  location: raw.location,
  created: raw.created,
  quantity: raw.quantity,
  description: raw.description,
});

export const parseProducerDealsData = (raw: IItem): CardItemTypes.IProps => ({
  id: raw.id,
  foodName: raw.food_name,
  producerId: raw.producer_id,
  producerName: raw.producer_name,
  consumerName: raw.consumer_name,
  price: raw.price,
  initialQuantity: raw.initial_quantity,
  availableQuantity: raw.available_quantity,
  location: raw.location,
  created: raw.created,
  quantity: raw.quantity,
  description: raw.description,
  complete: raw.complete,
});

const myDeals = (
  state = { data: [], loading: false },
  action: ActionType<IItem[]>,
): ILoadTypes<CardItemTypes.IProps[] | []> => {
  switch (action.type) {
    case GET_ACTIVE_DEALS.started:
      return {
        data: [],
        loading: true,
      };
    case GET_ACTIVE_DEALS.failed:
      return {
        data: [],
        errorMessage: action.errorMessage,
        loading: false,
      };
    case GET_ACTIVE_DEALS.success:
      if (!action.list) {
        return {
          data: [],
          loading: false,
        };
      }
      const parsedData = action.list.map((n: IItem) => parseDealsData(n));
      return {
        data: parsedData,
        loading: false,
      };
    default:
      return state;
  }
};

const producerDeals = (
  state = { data: [], loading: false },
  action: ActionType<IItem[]>,
): ILoadTypes<CardItemTypes.IProps[] | []> => {
  switch (action.type) {
    case GET_PRODUCER_DEALS.started:
      return {
        data: [],
        loading: true,
      };
    case GET_PRODUCER_DEALS.failed:
      return {
        data: [],
        errorMessage: action.errorMessage,
        loading: false,
      };
    case GET_PRODUCER_DEALS.success:
      if (!action.list) {
        return {
          data: [],
          loading: false,
        };
      }
      const parsedData = action.list.map((n: IItem) => parseProducerDealsData(n));
      return {
        data: parsedData,
        loading: false,
      };
    default:
      return state;
  }
};

const dealReducer = combineReducers({
  myDeals,
  producerDeals,
});

export default dealReducer;
