import React, {useEffect} from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import { useAction } from "../../Hooks/useAction";
import { useTypedSelector } from "../../Hooks/useTypedSelector";
import styles from "./Product.module.scss"
import {CatalogItem} from './../Catalog/CatalogItem/CatalogItem'
import { IProduct } from "../../Types/Product";
import Accordion from "./Accordion/Accordion";
import busketIcon from './../../Assets/Images/Product/BusketIcon.svg'
import WhatsappIcon from './../../Assets/Images/Product/WhatsappIcon.svg'
import { useDispatch } from "react-redux";
import { BusketActionTypes } from "../../Types/BusketAction";
import { usePersistedState } from "../../Hooks/usePersistedState";
export interface IBusket extends IProduct{
    count: number
}

export const Product: React.FC = () => {
    const [busket, setBusket] = usePersistedState<IBusket[]>([], 'BusketItems')
    const {pathname} = useLocation()
    const dispatch = useDispatch()
    let id: number = Number(pathname.slice(9))
    const {error, loading, product} = useTypedSelector(state => state.product)
    const {fetchProducts} = useAction()
    const curProd  = product.find(v => v.id === id) as IProduct

    useEffect(() => {
        !product.length && fetchProducts()
    }, [])
    useEffect(() => {
        dispatch({type: BusketActionTypes.UPDATE, payload: busket.length})
    }, [busket])
    const addItemToBusket = () => {
        if (busket.some((v: { id: number; }):boolean => v.id === id)) {
            let index: number = busket.findIndex((v: {id: number}) => v.id === id)
            busket[index].count++
            setBusket(busket)
        } else {
            setBusket([...busket, {...curProd, count: 1}])
        }
    }
    const handle = () => {
        addItemToBusket()
        window.open('/busket', "_self")
        
    }
    if (loading) {
        return <section className={styles.products}><h1>Loading...</h1></section>
    } 
    if (error){
        return <section className={styles.products}><h1>Error</h1></section>
    }
    return (
        <div className={styles.products}>
            <div className={styles.products__title}>??????????????</div>
            <CatalogItem id={curProd?.id} image={curProd?.image} price={curProd?.price} rate={curProd?.rating.rate} title={curProd?.title} single={false} key={curProd.id}/>
            <Accordion description={curProd.description}/>
            <div className={styles.products__container}>
                <button onClick={() => addItemToBusket()} className={styles.products__button}><img src={busketIcon} alt='busketIcon'/></button>
                <button onClick={handle} className={styles.products__button}>???????????? ????????????!</button>
                <button className={styles.products__button}><img src={WhatsappIcon} alt='WhatsAppIcon'/></button>
            </div>
        </div>
    );
}