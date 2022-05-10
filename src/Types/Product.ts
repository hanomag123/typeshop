
export enum ProductActionType {
    FETCH_PRODUCT = 'FETCH_PRODUCT',
    FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS',
    FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR'
}
interface IRating {
    rate: number
    count: number
}
export interface IProduct {
    id: number
    title: string
    category: string
    image: string
    price: number
    rating: IRating
}
export interface ProductState {
    product: IProduct[];
    loading: boolean;
    error: null | string
}

interface FetchProductAction {
    type: ProductActionType.FETCH_PRODUCT
}
interface FetchProductSuccessAction {
    type: ProductActionType.FETCH_PRODUCT_SUCCESS;
    payload: IProduct[]
}
interface FetchProductErrorAction {
    type: ProductActionType.FETCH_PRODUCT_ERROR;
    payload: string
}

export type ProductAction = FetchProductAction | FetchProductSuccessAction | FetchProductErrorAction