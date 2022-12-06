import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";

import stylesConstructorItem from "./constructor-item.module.css";

import { BurgerPropTypes } from "../utils/PropTypes";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { changeIngredient } from "../../services/actions/burger-constructor";

import PropTypes from "prop-types";

export function ConstructorItem({ ingredient, index, handleRemoveIngredient }) {
  const dispatch = useDispatch();
  const { selectedIngredient } = useSelector(
    (store) => store.burgerConstructor
  );

  const ref = useRef(null);
  const id = ingredient.id;

  const [{ handlerId, draggedIngredient }, drop] = useDrop({
    accept: "burgerConstructor",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
        draggedIngredient: monitor.getItem(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch(changeIngredient(selectedIngredient, dragIndex, hoverIndex));

      item.index = hoverIndex;
    },
  });

  const [, drag] = useDrag({
    type: "burgerConstructor",
    item: () => {
      return { id, index };
    },
  });

  drag(drop(ref));

  const opacity = !draggedIngredient
    ? 1
    : draggedIngredient.id === id
    ? 0.5
    : 1;

  return (
    <li
      className={stylesConstructorItem.ingredient}
      ref={ref}
      style={{ opacity }}
      data-handler-id={handlerId}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.info.name}
        price={ingredient.info.price}
        thumbnail={ingredient.info.image}
        handleClose={() => handleRemoveIngredient(ingredient)}
      />
    </li>
  );
}

ConstructorItem.propTypes = {
  ingredient: PropTypes.shape({
    id: PropTypes.string.isRequired,
    info: BurgerPropTypes,
  }),
  index: PropTypes.number.isRequired,
  handleRemoveIngredient: PropTypes.func.isRequired,
};
