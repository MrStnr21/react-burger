import { getIngredientsApi } from "../../components/utils/api";

const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

const getIngredients = () => {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });

    getIngredientsApi()
      .then(
        (res) =>
          res &&
          res.success &&
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            payload: res.data,
          })
      )
      .catch((err) =>
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        })
      );
  };
};

export {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  getIngredients,
  getIngredientsApi,
};
