import { nanoid } from "nanoid";

const ADD_INGREDIENT = "ADD_INGREDIENT";
const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
const RESET_CONSTRUCTOR = "RESET_CONSTRUCTOR";
const CHANGE_INGREDIENT = "MOVE_INGREDIENT";

const addIngredient = (ingredient) => ({
  type: ADD_INGREDIENT,
  payload: { ingredient: ingredient, id: nanoid(6) },
});

const removeIngredient = (ingredient) => ({
  type: REMOVE_INGREDIENT,
  payload: ingredient,
});

const resetConstructor = () => ({
  type: RESET_CONSTRUCTOR,
});

const changeIngredient = (ingredients, dragIndex, hoverIndex) => {
  const newArrIngredients = ingredients.slice();
  const dragIngredient = newArrIngredients[dragIndex];
  newArrIngredients.splice(dragIndex, 1);
  newArrIngredients.splice(hoverIndex, 0, dragIngredient);

  return {
    type: CHANGE_INGREDIENT,
    payload: [...newArrIngredients],
  };
};

export {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  RESET_CONSTRUCTOR,
  CHANGE_INGREDIENT,
  addIngredient,
  removeIngredient,
  resetConstructor,
  changeIngredient,
};
