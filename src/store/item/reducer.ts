import { combineReducers } from 'redux';
import { ActionType, ILoadTypes } from 'src/store/types';
import { GET_ITEMS } from 'src/store/item/types';
import { IItem } from 'src/store/data.types';
import { CardItemTypes } from 'src/components/molecules/CardItem/types';

export const parseItemsData = (raw: IItem): CardItemTypes.IProps => ({
  id: raw.id,
  name: raw.name,
  producerId: raw.producer_id,
  price: raw.price,
  initialQuantity: raw.initial_quantity,
  availableQuantity: raw.available_quantity,
  location: raw.location,
  created: raw.created,
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

const itemReducer = combineReducers({
  items,
});

export default itemReducer;
