const OPEN_INGREDIENT_DETAILS = "OPEN_INGREDIENT_DETAILS";
const CLOSE_INGREDIENT_DETAILS = "CLOSE_INGREDIENT_DETAILS";

const openInfo = (ingredient) => ({
  type: OPEN_INGREDIENT_DETAILS,
  payload: ingredient,
});

const closeInfo = () => ({
  type: CLOSE_INGREDIENT_DETAILS,
});

export {
  OPEN_INGREDIENT_DETAILS,
  CLOSE_INGREDIENT_DETAILS,
  openInfo,
  closeInfo,
};
