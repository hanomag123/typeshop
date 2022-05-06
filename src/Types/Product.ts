
export enum ProductActionType {
    FETCH_PRODUCT = 'FETCH_PRODUCT',
    FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS',
    FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR'
}

export interface ProductState {
    product: any[];
    loading: boolean;
    error: null | string
}

interface FetchProductAction {
    type: ProductActionType.FETCH_PRODUCT
}
interface FetchProductSuccessAction {
    type: ProductActionType.FETCH_PRODUCT_SUCCESS;
    payload: any[]
}
interface FetchProductErrorAction {
    type: ProductActionType.FETCH_PRODUCT_ERROR;
    payload: string
}

export type ProductAction = FetchProductAction | FetchProductSuccessAction | FetchProductErrorAction