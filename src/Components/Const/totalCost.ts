import { IBusket } from "../Product/Product";


export function totalCost(arr: IBusket[]):number {
    return +arr.reduce((totalCost: number, v: IBusket) => (v.count * v.price) + totalCost, 0).toFixed(2  )
}