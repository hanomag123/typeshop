import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAction } from "../../Hooks/useAction";
import { useTypedSelector } from "../../Hooks/useTypedSelector";
import { FilterCategory, FilterType, IFilter } from "../../Store/Reducers/FilterReducer";
import { IProduct, ProductActionType } from "../../Types/Product";
import { Advertising } from "./Advertising/Advertising";
import styles from "./Catalog.module.scss"
import { CatalogItem } from "./CatalogItem/CatalogItem";
import { Filter } from './Filter/Filter';


export const Catalog: React.FC = () => {
    const {error, loading, product} = useTypedSelector(state => state.product)
    const {fetchProducts} = useAction()
    const dispatch = useDispatch()
    const {filter}: IFilter = useTypedSelector(state => state.filter)
    const local: IProduct[] = JSON.parse(localStorage.getItem('DefaultCatalog') || '[]')

    useEffect(() => {
        if (product.length && local.length) {
            dispatch({type: ProductActionType.FETCH_PRODUCT_SUCCESS, payload: local.filter(v => filter[v.category as FilterCategory])})
        }
    }, [filter])
    useEffect(() => {
        if (!product.length && !local.length) {
            fetchProducts()
        } 
    }, [])
    useEffect(() => {
        if (product.length === 20) {
            localStorage.setItem('DefaultCatalog', JSON.stringify(product))
        } else if (!product.length && local.length) {
            dispatch({type: ProductActionType.FETCH_PRODUCT_SUCCESS, payload: local})
        }
    })
    if (loading) {
        return <section className={styles.catalog}><Advertising /><h1>Loading...</h1></section>
    } 
    if (error){
        return <section className={styles.catalog}><Advertising /><h1>Error</h1></section>
    }
    return (
        <section className={styles.catalog}>
            <Advertising />
            <div className={styles.catalog__title}>Каталог</div>
            <div className={styles.catalog__container}>
                {product.map(el => <CatalogItem key={el.id} id={el.id} title={el.title} price={el.price} rate={el.rating.rate} image={el.image} single={true}/>)}
            </div>
        </section>
    );
}