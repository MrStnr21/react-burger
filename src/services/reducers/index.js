import { combineReducers } from "redux";
import { burgerConstructorReducer } from "./burger-constructor";
import { ingredientsReducer } from "./ingredient";
import { ingredientDetailsReducer } from "./ingredient-details";
import { orderReducer } from "./order";

export const rooReducer = combineReducers({
  burgerConstructor: burgerConstructorReducer,
  ingredientDetails: ingredientDetailsReducer,
  ingredients: ingredientsReducer,
  order: orderReducer,
});
