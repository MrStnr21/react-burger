import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  RESET_CONSTRUCTOR,
} from "../actions/burger-constructor";

const initialState = {
  selectedIngredient: [],
  selectedBun: null,
};

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return action.payload.ingredient.type !== "bun"
        ? {
            ...state,
            selectedIngredient: [
              ...state.selectedIngredient,
              { info: action.payload.ingredient, id: action.payload.id },
            ],
          }
        : {
            ...state,
            selectedBun: {
              info: action.payload.ingredient,
              id: action.payload.id,
            },
          };

    case REMOVE_INGREDIENT:
      return {
        ...state,
        selectedIngredient: state.selectedIngredient.filter(
          (ingredient) => ingredient.id !== action.payload.id
        ),
      };

    case RESET_CONSTRUCTOR:
      return initialState;

    default:
      return state;
  }
};
