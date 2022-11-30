import { getIngredients, makeOrder } from "../../components/utils/api";

export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const REMOVE_INGREDIENTS = 'REMOVE_INGREDIENTS';

export const OPEN_INFO_INGREDIENT = 'OPEN_INFO_INGREDIENT';
export const CLOSE_INFO_INGREDIENT = 'CLOSE_INFO_INGREDIENT';

export const MAKE_ORDER_SUCCESS = 'MAKE_ORDER_SUCCESS';
export const MAKE_ORDER_FAILED= 'MAKE_ORDER_FAILED';

export const getIngredientsReducer = () => {
    return function (dispatch) {
        getIngredients()
            .then(res => {
                if (res.success) {
                    dispatch({
                        type: GET_INGREDIENTS_SUCCESS,
                        ingredients: res.data
                    })
                } else {
                    dispatch({
                        type: GET_INGREDIENTS_FAILED
                    })
                }
            }).catch(err => {
                dispatch({
                    type: GET_INGREDIENTS_FAILED
                })
            })
    }
};

export const makeOrderReducer = (ingredientsId) => {
    return function (dispatch) {
        makeOrder(ingredientsId)
        .then(res => {
            if (res.success) {
                dispatch({
                    type: MAKE_ORDER_SUCCESS,
                    name: res.order.name,
                    number: res.order.number,
                })
            } else {
                dispatch({
                    type: MAKE_ORDER_FAILED
                })
            }
        }).catch(err => {
            dispatch({
                type: MAKE_ORDER_FAILED
            })
        })
    }
}

//  React.useEffect(() => {
//     const getDataApi = () => {
//       getIngredients()
//         .then((res) => {
//           setIngredients(res.data);
//         })
//         .catch((err) => {
//           console.log(`Ошибка ${err}, запрос не выполнен`);
//         });
//     };

//     getDataApi();
//   }, []);

