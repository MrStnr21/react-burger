import { combineReducers } from "redux";
import { burgerConstructorReducer } from "./burger-constructor";
import { ingredientsReducer } from "./ingredients";
import { ingredientDetailsReducer } from "./ingredient-details";
import { orderReducer } from "./order";

const rootReducer = combineReducers({
  burgerConstructor: burgerConstructorReducer,
  ingredientDetails: ingredientDetailsReducer,
  ingredients: ingredientsReducer,
  order: orderReducer,
});

export { rootReducer };
