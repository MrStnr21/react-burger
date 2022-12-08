import { nanoid } from "nanoid";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const RESET_CONSTRUCTOR = "RESET_CONSTRUCTOR";
export const CHANGE_INGREDIENT = "MOVE_INGREDIENT";

export const addIngredient = (ingredient) => ({
  type: ADD_INGREDIENT,
  payload: { ingredient: ingredient, id: nanoid(6) },
});

export const removeIngredient = (ingredient) => ({
  type: REMOVE_INGREDIENT,
  payload: ingredient,
});

export const resetConstructor = () => ({
  type: RESET_CONSTRUCTOR,
});

export const changeIngredient = (ingredients, dragIndex, hoverIndex) => {
  const newArrIngredients = ingredients.slice();
  const dragIngredient = newArrIngredients[dragIndex];
  newArrIngredients.splice(dragIndex, 1);
  newArrIngredients.splice(hoverIndex, 0, dragIngredient);

  return {
    type: CHANGE_INGREDIENT,
    payload: [...newArrIngredients],
  };
};
