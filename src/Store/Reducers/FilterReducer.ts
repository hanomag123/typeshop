export interface IFilter {
    filter: {
        "men's clothing": boolean
        "women's clothing": boolean
        "jewelery": boolean
        "electronics": boolean
    }
}
export enum FilterCategory {
    MENSCLOTHING = "men's clothing",
    WOMENSCLOTHING = "women's clothing",
    JEWELERY = "jewelery",
    ELECTRONICS = "electronics"
}
export enum FilterType {
    UPDATE_FILTER = 'UPDATE_FILTER'
}
export interface IActionFilter {
    type: FilterType.UPDATE_FILTER
    payload: IFilter
}
const initialState: IFilter = {
    filter: {
        "men's clothing": false,
        "electronics": false,
        "jewelery": false,
        "women's clothing": false

    }
}

export const FilterReducer = (state = initialState, action: IActionFilter): IFilter => {
    switch(action.type) {
        case 'UPDATE_FILTER':
            return {...state, filter: {...state.filter, ...action.payload}}
        default: 
        return state
    }
}