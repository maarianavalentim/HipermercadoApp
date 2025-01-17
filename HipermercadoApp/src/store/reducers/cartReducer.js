import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/productActions';

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: state.items.concat(action.product),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.productId),
      };
    default:
      return state;
  }
};

export default cartReducer;
