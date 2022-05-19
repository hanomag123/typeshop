import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAction } from "../../Hooks/useAction";
import { useTypedSelector } from "../../Hooks/useTypedSelector";
import { FilterCategory, FilterType } from "../../Store/Reducers/FilterReducer";
import { Advertising } from "./Advertising/Advertising";
import styles from "./Catalog.module.scss"
import { CatalogItem } from "./CatalogItem/CatalogItem";
import { Filter } from './Filter/Filter';


export const Catalog: React.FC = () => {
    const {error, loading, product} = useTypedSelector(state => state.product)
    const {fetchProducts} = useAction()
    useEffect(() => {
        if (!product.length) {
            fetchProducts()
        }
    }, [])
    if (loading) {
        return <section className={styles.catalog}><Advertising /><h1>Loading...</h1></section>
    } 
    if (error){
        return <section className={styles.catalog}><Advertising /><h1>Error</h1></section>
    }
    return (
        <section className={styles.catalog}>
            <Advertising />
            <Filter />
            <div className={styles.catalog__title}>Каталог</div>
            <div className={styles.catalog__container}>
                {product.map(el => <CatalogItem key={el.id} id={el.id} title={el.title} price={el.price} rate={el.rating.rate} image={el.image} single={true}/>)}
            </div>
        </section>
    );
}