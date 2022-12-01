import {
  CLOSE_INGREDIENT_INFO,
  OPEN_INGREDIENT_INFO,
} from "../actions/ingredient-details";

const initialState = {
  showedIngredient: null,
};

export const ingredientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_INGREDIENT_INFO:
      return {
        ...state,
        showedIngredient: action.payload,
      };

    case CLOSE_INGREDIENT_INFO:
      return initialState;

    default:
      return state;
  }
};
