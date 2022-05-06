import axios from "axios";
import { Dispatch } from "react";
import { ProductAction, ProductActionType } from "../../Types/Product";

export const fetchProducts = () => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductActionType.FETCH_PRODUCT})
            const response = await axios.get('https://fakestoreapi.com/products')
            dispatch({type: ProductActionType.FETCH_PRODUCT_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: ProductActionType.FETCH_PRODUCT_ERROR, payload: 'Error'})
        }
    }
}