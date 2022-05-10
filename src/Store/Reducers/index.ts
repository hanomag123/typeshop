import { combineReducers } from "redux";
import { FavoriteReducer } from "./FavoriteReducer";
import { ProductReducer } from "./ProductReducer";

export const rootReducer = combineReducers({
    product: ProductReducer,
    favorite: FavoriteReducer
})

export type RootState = ReturnType<typeof rootReducer>