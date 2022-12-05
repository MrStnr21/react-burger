import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useMemo } from "react";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import stylesIngredientItem from "./ingredient-item.module.css";
import PropTypes from "prop-types";

export const IngredientItem = ({ ingredient, onIngredientClick }) => {
  const { selectedIngredient, selectedBun } = useSelector(
    (store) => store.burgerConstructor
  );

  const [{ isHover }, dragRef] = useDrag({
    type: "ingredients",
    item: { ...ingredient },
    collect: (monitor) => ({
      isHover: monitor.isDragging(),
    }),
  });

  const counterIngredient = useMemo(() => {
    if (ingredient.type !== "bun") {
      const sameIngredients = selectedIngredient?.filter(
        (topping) => topping.info._id === ingredient._id
      );
      return sameIngredients?.length;
    }
    return selectedBun?.info._id === ingredient._id ? 2 : 0;
  }, [selectedIngredient, selectedBun]);

  return (
    <li
      className={`${stylesIngredientItem.item} ${
        isHover ? stylesIngredientItem.isHover : ""
      }`}
      key={ingredient._id}
      onClick={onIngredientClick}
      ref={dragRef}
    >
      <img src={ingredient.image} alt={ingredient.name} />
      <div className={`${stylesIngredientItem.price}`}>
        <p className="text text_type_digits-default">{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${stylesIngredientItem.name} text text_type_main-default`}>
        {ingredient.name}
      </p>
      {counterIngredient > 0 && (
        <Counter count={counterIngredient} size="default" />
      )}
    </li>
  );
};

IngredientItem.propTypes = {
  ingredient: PropTypes.object.isRequired,
  onIngredientClick: PropTypes.func.isRequired,
};
