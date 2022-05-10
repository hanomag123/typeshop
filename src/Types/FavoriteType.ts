export enum FavoriteTypes {
    INCREASE = 'INCREASE',
    DECREASE = 'DECREASE',
    INIT = 'INIT'
}

interface FavoriteIncreaseAction {
    type: FavoriteTypes.INCREASE
    payload: number
}

interface FavoriteDecreaseAction {
    type: FavoriteTypes.DECREASE
    payload: number
}

interface FavoriteInitAction {
    type: FavoriteTypes.INIT
    payload: number
}

export type FavoriteActions = FavoriteDecreaseAction | FavoriteIncreaseAction | FavoriteInitAction