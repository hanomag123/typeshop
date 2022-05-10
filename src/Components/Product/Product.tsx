import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import { useAction } from "../../Hooks/useAction";
import { useTypedSelector } from "../../Hooks/useTypedSelector";
import styles from "./Product.module.scss"
import {CatalogItem} from './../Catalog/CatalogItem/CatalogItem'
import { IProduct } from "../../Types/Product";
import Accordion from "./Accordion/Accordion";
import busketIcon from './../../Assets/Images/Product/BusketIcon.svg'
import WhatsappIcon from './../../Assets/Images/Product/WhatsappIcon.svg'


export const Product: React.FC = () => {
    const {pathname} = useLocation()
    let id: number = Number(pathname.slice(9))
    const {error, loading, product} = useTypedSelector(state => state.product)
    const {fetchProducts} = useAction()
    const curProd  = product.find(v => v.id === id) as IProduct
    console.log(curProd)
    useEffect(() => {
        fetchProducts()
        localStorage.setItem('product', JSON.stringify(product))
        console.log(product)
    }, [])
    if (loading) {
        return <section className={styles.products}><h1>Loading...</h1></section>
    } 
    if (error){
        return <section className={styles.products}><h1>Error</h1></section>
    }
    return (
        <div className={styles.products}>
            <div className={styles.products__title}>Продукт</div>
            <CatalogItem id={curProd?.id} image={curProd?.image} price={curProd?.price} rate={curProd?.rating.rate} title={curProd?.title} single={false}/>
            <Accordion />
            <div className={styles.products__container}>
                <button className={styles.products__button}><img src={busketIcon}/></button>
                <button className={styles.products__button}>Купить сейчас!</button>
                <button className={styles.products__button}><img src={WhatsappIcon}/></button>
            </div>
        </div>
    );
}