import { ProductAction, ProductActionType, ProductState } from "../../Types/Product"

const initialState: ProductState= {
    product: [],
    loading: false,
    error: null
}

export const ProductReducer = (state = initialState, action: ProductAction): ProductState => {
    switch (action.type) {
        case ProductActionType.FETCH_PRODUCT:
            return {loading: true, error: null, product: []}
        case ProductActionType.FETCH_PRODUCT_SUCCESS:
            return {loading: false, error: null, product: action.payload}
        case ProductActionType.FETCH_PRODUCT_ERROR:
            return {loading: false, error: action.payload, product: []}
        default: 
            return state
    }

}