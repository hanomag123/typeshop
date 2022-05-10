import { IProduct } from "../../Types/Product"

export const toogleLocalStorage = (id: number, product: IProduct[]) => {
    const FavoriteItems: string = 'FavoriteItems'
    const currentProduct = product.find(v => v.id === id)
    let favoriteItems: any[] = JSON.parse(localStorage.getItem(FavoriteItems) || '[]')
    if (favoriteItems.some(v => v.id === id)) {
        let index = favoriteItems.findIndex(v => v.id === id)
        favoriteItems.splice(index, 1)
    } else {
        favoriteItems.push(currentProduct)
    }
    localStorage.setItem(FavoriteItems, JSON.stringify(favoriteItems))
}