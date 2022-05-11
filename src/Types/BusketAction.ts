export enum BusketActionTypes {
    UPDATE = 'UPDATE'
}

export interface BusketItemsAction {
    type: BusketActionTypes.UPDATE
    payload: number
}