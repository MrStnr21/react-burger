export const OPEN_INGREDIENT_INFO = "OPEN_INGREDIENT_INFO";
export const CLOSE_INGREDIENT_INFO = "CLOSE_INGREDIENT_INFO";

export const openIngredientInfo = (ingredient) => ({
  type: OPEN_INGREDIENT_INFO,
  payload: ingredient,
});

export const closeIngredientInfo = (ingredient) => ({
  type: CLOSE_INGREDIENT_INFO,
});
