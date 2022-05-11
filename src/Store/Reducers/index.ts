import { combineReducers } from "redux";
import { BusketItemsReducer } from "./BusketItemsReducer";
import { FavoriteReducer } from "./FavoriteReducer";
import { ProductReducer } from "./ProductReducer";

export const rootReducer = combineReducers({
    product: ProductReducer,
    favorite: FavoriteReducer,
    busket: BusketItemsReducer
})

export type RootState = ReturnType<typeof rootReducer>