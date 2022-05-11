import { BusketActionTypes, BusketItemsAction } from "../../Types/BusketAction"

interface BusketState {
    busketCount: number
}
const initialState: BusketState = {
    busketCount: JSON.parse(localStorage.getItem('BusketItems') || '[]').length
}
export const BusketItemsReducer = (state: BusketState = initialState, action: BusketItemsAction): BusketState => {
    switch(action.type) {
        case BusketActionTypes.UPDATE:
            return {...state, busketCount: state.busketCount = action.payload}
        default:
        return state
    }
}