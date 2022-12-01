import {
  MAKE_ORDER_FAILED,
  MAKE_ORDER_REQUEST,
  MAKE_ORDER_RESET,
  MAKE_ORDER_SUCCESS,
} from "../actions/order";

const initialState = {
  orderRequest: false,
  orderFailed: false,
  orderNumber: null,
  orderDetailsOpened: false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_ORDER_REQUEST:
      return {
        ...state,
        orderRequest: true,
        orderDetailsOpened: true,
      };

    case MAKE_ORDER_SUCCESS:
      return {
        ...state,
        orderRequest: false,
        orderFailed: false,
        orderNumber: action.payload.order.number,
      };

    case MAKE_ORDER_FAILED:
      return {
        ...state,
        orderRequest: false,
        orderFailed: true,
        orderDetailsOpened: true,
      };

    case MAKE_ORDER_RESET:
      return initialState;

    default:
      return state;
  }
};
