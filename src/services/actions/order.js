import { makeOrderApi } from "../../components/utils/api";

export const MAKE_ORDER_REQUEST = "MAKE_ORDER_REQUEST";
export const MAKE_ORDER_SUCCESS = "MAKE_ORDER_SUCCESS";
export const MAKE_ORDER_FAILED = "MAKE_ORDER_FAILED";
export const MAKE_ORDER_RESET = "MAKE_ORDER_RESET";

export const makeOrder = (order) => {
  return function (dispatch) {
    dispatch({
      type: MAKE_ORDER_REQUEST,
    });

    makeOrderApi(order)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: MAKE_ORDER_SUCCESS,
            payload: res,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: MAKE_ORDER_FAILED,
        });
      });
  };
};

export const closeOrder = () => ({
  type: MAKE_ORDER_RESET,
});
