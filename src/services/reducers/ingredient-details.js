import {
  CLOSE_INGREDIENT_DETAILS,
  OPEN_INGREDIENT_DETAILS,
} from "../actions/ingredient-details";

const initialState = {
  showedIngredient: null,
};

export const ingredientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_INGREDIENT_DETAILS:
      return {
        ...state,
        showedIngredient: action.payload,
      };

    case CLOSE_INGREDIENT_DETAILS:
      return initialState;

    default:
      return state;
  }
};
