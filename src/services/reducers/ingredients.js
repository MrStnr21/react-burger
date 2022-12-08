import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
} from "../actions/ingredients";

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return {
        ...state,
        ingredientsRequest: true,
        ingredientsFailed: false,
      };

    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        ingredients: action.payload,
        ingredientsRequest: false,
        ingredientsFailed: false,
      };

    case GET_INGREDIENTS_FAILED:
      return {
        ...initialState,
        ingredientsFailed: true,
      };

    default:
      return state;
  }
};
