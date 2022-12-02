export const OPEN_INGREDIENT_DETAILS = "OPEN_INGREDIENT_DETAILS";
export const CLOSE_INGREDIENT_DETAILS = "CLOSE_INGREDIENT_DETAILS";

export const openInfo = (ingredient) => ({
  type: OPEN_INGREDIENT_DETAILS,
  payload: ingredient,
});

export const closeInfo = () => ({
  type: CLOSE_INGREDIENT_DETAILS,
});
