import { pickBy } from 'lodash';
import {
  ADD_TO_CART,
  UPDATE_CART_ITEM,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART,
} from '../action';

function cart(state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
    case UPDATE_CART_ITEM:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          ...action.payload,
        },
      };
    case REMOVE_ITEM_FROM_CART:
      return pickBy(state, order => order.id !== action.payload);
    case CLEAR_CART:
      return {};
    default:
      return state;
  }
}

export default cart;
