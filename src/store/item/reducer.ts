import { combineReducers } from 'redux';
import { ActionType, ILoadTypes } from 'src/store/types';
import { GET_ITEMS, GET_REQUESTS, GET_MY_ITEMS } from 'src/store/item/types';
import { IItem } from 'src/store/data.types';
import { CardItemTypes } from 'src/components/molecules/CardItem/types';

export const parseItemsData = (raw: IItem): CardItemTypes.IProps => ({
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

const items = (
  state = { data: [], loading: false },
  action: ActionType<IItem[]>,
): ILoadTypes<CardItemTypes.IProps[] | []> => {
  switch (action.type) {
    case GET_ITEMS.started:
      return {
        data: [],
        loading: true,
      };
    case GET_ITEMS.failed:
      return {
        data: [],
        errorMessage: action.errorMessage,
        loading: false,
      };
    case GET_ITEMS.success:
      if (!action.list) {
        return {
          data: [],
          loading: false,
        };
      }
      const parsedData = action.list.map((n: IItem) => parseItemsData(n));
      return {
        data: parsedData,
        loading: false,
      };
    default:
      return state;
  }
};

const myItems = (state = { data: [], loading: false }, action: any) => {
  switch (action.type) {
    case GET_MY_ITEMS.started:
      return {
        data: [],
        loading: true,
      };
    case GET_MY_ITEMS.failed:
      return {
        data: [],
        errorMessage: action.errorMessage,
        loading: false,
      };
    case GET_MY_ITEMS.success:
      if (!action.myItems) {
        return {
          data: [],
          loading: false,
        };
      }
      return {
        data: action.myItems,
        loading: false,
      };
    default:
      return state;
  }
};

export const parsePlacesData = (raw: IItem): any => ({
  price: raw.price,
  name: raw.food_name,
  location: raw.location,
});

const places = (
  state = { data: [], loading: false }, action: any): any => {
  switch (action.type) {
    case GET_ITEMS.started:
      return {
        data: [],
        loading: true,
      };
    case GET_ITEMS.failed:
      return {
        data: [],
        errorMessage: action.errorMessage,
        loading: false,
      };
    case GET_ITEMS.success:
      if (!action.list) {
        return {
          data: [],
          loading: false,
        };
      }
      const parsedData = action.list.map((n: IItem) => parsePlacesData(n));
      return {
        data: parsedData,
        loading: false,
      };
    default:
      return state;
  }
};

const requests = (
  state = { data: [], loading: false },
  action: ActionType<IItem[]>,
): ILoadTypes<CardItemTypes.IProps[] | []> => {
  switch (action.type) {
    case GET_REQUESTS.started:
      return {
        data: [],
        loading: true,
      };
    case GET_REQUESTS.failed:
      return {
        data: [],
        errorMessage: action.errorMessage,
        loading: false,
      };
    case GET_REQUESTS.success:
      if (!action.list) {
        return {
          data: [],
          loading: false,
        };
      }
      const parsedData = action.list.map((n: IItem) => parseItemsData(n));
      return {
        data: parsedData,
        loading: false,
      };
    default:
      return state;
  }
};

const itemReducer = combineReducers({
  items,
  myItems,
  requests,
  places,
});

export default itemReducer;
