import { FavoriteActions, FavoriteTypes } from "../../Types/FavoriteType"
interface FavoriteState {
    favorite: number
}
const initialState: FavoriteState = {
    favorite: JSON.parse(localStorage.getItem('FavoriteItems') || '[]').length
}
export const FavoriteReducer = (state: FavoriteState = initialState, action: FavoriteActions): FavoriteState => {
    switch(action.type) {
        case FavoriteTypes.INCREASE:
            return {...state, favorite: state.favorite + action.payload}
        case FavoriteTypes.DECREASE:
            return {...state, favorite: state.favorite - action.payload}
        case FavoriteTypes.INIT: 
            return {...state, favorite: state.favorite = action.payload}
        default:
        return state
    }
}