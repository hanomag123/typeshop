import React, { useEffect, useState } from "react";
import styles from "./BusketItem.module.scss"
import PlusImg from './../../../Assets/Images/Busket/plus.svg'
import MinusImg from './../../../Assets/Images/Busket/minus.svg'
import DeleteImg from './../../../Assets/Images/Busket/DeleteIcon.svg'
import { getItemFromLocal } from "../../Const/getItemFromLocal";
import { IBusket } from "../../Product/Product";
import { BusketActionTypes } from "../../../Types/BusketAction";
import { useDispatch } from "react-redux";

interface IBusketProps {
    name: string
    count: number
    price: number
    img: string
    id: number
    busket: IBusket[]
    setBusket: React.Dispatch<IBusket[]>
}

export const BusketItem: React.FC<IBusketProps> = ({name, count, price, img, busket, id, setBusket}) => {
    const dispatch = useDispatch()
    const [countItem, setCountItem] = useState<number>(count)
    const changeCount = (plusMinus: boolean): void => {
        if (countItem > 0 && countItem < 100 && plusMinus) {
            setCountItem(current => ++current)
        } else if (countItem >= 2 && !plusMinus) {
            setCountItem(current => --current)            
        }
    }
    const deleteItem = (id: number): void => {
        setBusket(busket.reduce((accArr: IBusket[], v: IBusket): IBusket[] => v.id === id ? [...accArr] : [...accArr, {...v}], []))
        dispatch({type: BusketActionTypes.UPDATE, payload: busket.length - 1})
    }
    useEffect(() => {
        setBusket(busket.reduce((accArr: IBusket[], v: IBusket): IBusket[] => v.id === id ? [...accArr, {...v, count: countItem}] : [...accArr, {...v}], []))
    }, [countItem])
    return (
        <div className={styles.busketItem}>
            <img className={styles.busketItem__image} src={img} alt={name} />
            <img onClick={() => deleteItem(id)} className={styles.busketItem__deleteIcon} src={DeleteImg} alt='deleteIcon' />
            <div className={styles.busketItem__title}>{name}</div>
            <div className={styles.busketItem__price}>{price} $</div>
            <div className={styles.busketItem__countContainer}>
                <button onClick={() => changeCount(true)} className={styles.busketItem__button}><img src={PlusImg} alt='plusImage'/></button>
                <div className={styles.busketItem__count}>{countItem}</div>
                <button onClick={() => changeCount(false)} className={styles.busketItem__button}><img className={styles.busketItem__minusImg} src={MinusImg} alt='minusImage'/></button>
            </div>
            <div className={styles.busketItem__cost}>{(countItem * price).toFixed(1)}$</div>
        </div>
    );
}