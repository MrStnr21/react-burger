export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const RESET_CONSTRUCTOR = "RESET_CONSTRUCTOR";
export const MOVE_INGREDIENT = "MOVE_INGREDIENT";

export const removeIngredient = (ingredient) => ({
  type: REMOVE_INGREDIENT,
  payload: ingredient,
});

export const resetConstructor = () => ({
  type: RESET_CONSTRUCTOR,
});
