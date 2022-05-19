import { combineReducers } from "redux";
import { BusketItemsReducer } from "./BusketItemsReducer";
import { FavoriteReducer } from "./FavoriteReducer";
import { FilterReducer } from "./FilterReducer";
import { ProductReducer } from "./ProductReducer";

export const rootReducer = combineReducers({
    product: ProductReducer,
    favorite: FavoriteReducer,
    busket: BusketItemsReducer,
    filter: FilterReducer
})

export type RootState = ReturnType<typeof rootReducer>