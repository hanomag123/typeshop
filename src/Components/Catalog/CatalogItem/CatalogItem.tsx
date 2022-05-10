import React, { useEffect, useReducer } from "react";
import styles from "./CatalogItem.module.scss"
import starImage from './../../../Assets/Images/Catalog/Star.svg'
import favorImage from './../../../Assets/Images/Catalog/Favor.svg'
import favorImageActive from './../../../Assets/Images/Catalog/FavorActive.svg'
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import { toogleLocalStorage } from "../../Const/toogleLocalStorage";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FavoriteTypes } from "../../../Types/FavoriteType";

interface IItem {
    id: number
    title: string
    price: number
    rate: number
    image: string
    single: boolean
}

export const CatalogItem: React.FC<IItem> = ({id, title, price, rate, image, single}) => {
    const {product} = useTypedSelector(state => state.product)
    const [toogle, setToogle] = useReducer(toogle => !toogle, false)
    const dispatch = useDispatch()
    useEffect(() => {
        let arr: any[] = JSON.parse(localStorage.getItem('FavoriteItems') || '[]');
        arr = arr.map(v => v.id)
        arr.includes(id) && setToogle()
    }, [])
    useEffect(() => {
        dispatch({type: FavoriteTypes.INIT, payload: JSON.parse(localStorage.getItem('FavoriteItems') || '[]').length})
    }, [JSON.parse(localStorage.getItem('FavoriteItems') || '[]').length])
    return (
        <div className={styles.catalogItem}>
            <img className={styles.catalogItem__favor} 
                onClick={() => {toogleLocalStorage(id, product)
                setToogle()}} 
                src={toogle ? favorImageActive : favorImage} alt='favoriteIcon'/>
            <img className={styles.catalogItem__image} src={image} alt={title} />
            <div className={styles.catalogItem__container}>
                <Link to={`catalog/${id}`} className={styles.catalogItem__title} >
                    {title}
                </Link>
                <div className={styles.catalogItem__price}>
                    {price} $
                </div>
                {single &&<div className={styles.catalogItem__wrapper}>
                    <img src={starImage} alt='starImage' />
                    <div className={styles.catalogItem__rate}>{rate}</div>
                </div>}
            </div>
        </div>
    );
}