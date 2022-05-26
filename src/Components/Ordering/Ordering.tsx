import React from "react";
import { Link } from "react-router-dom";
import { BusketEmpty } from "../Busket/BusketEmpty/BusketEmpty";
import { IBusket } from "../Product/Product";
import styles from "./Ordering.module.scss"

export const Ordering: React.FC = () => {
    const busket:IBusket[] = JSON.parse(localStorage.getItem('BusketItems') || '[]')
    const date = Date.now()
    const giveTotalCost = ((): number => {
        return +(busket.reduce((num: number, item: IBusket) => num + item.price * item.count, 0)).toFixed(2)
    })

    if (!busket.length) {
        return <BusketEmpty />
    }
    return (
        <div className={styles.ordering}>
            <div className={styles.ordering__container}>
                <span className={styles.ordering__title}>Товары</span>
                <div className={styles.ordering__containerItem}>
                    {busket.map(item => (
                    <div className={styles.ordering__productItem} key={item.id}>
                        <img className={styles.ordering__image} src={item.image} alt='ImageItem'/>
                        <div className={styles.ordering__wrapper}>
                            <div>{item.count} x {item.title}</div>
                            <div>{item.count * item.price} $</div>
                        </div >
                        <div>{item.price} $</div>
                    </div>))}
                </div>
            </div>
            <div>
                <div className={styles.ordering__title}>Адрес доставки</div>
                <form className={styles.ordering__form} id='form' method='get'>
                    <select name='city'>
                        <option>Алматы</option>
                        <option>Минск</option>
                    </select>
                    <input className={styles.ordering__input} type='text' name="street" placeholder='Улица / Район'></input>
                    <input className={styles.ordering__item} type='text' name="house" placeholder='Дом'></input>
                    <input className={styles.ordering__item} type='text' name="house" placeholder='Дом'></input>
                    <input className={styles.ordering__item} type='text' name='floar' placeholder='Этаж'></input>
                    <input className={styles.ordering__item} type='text' name="room" placeholder='Квартира'></input>
                </form>
            </div>
            <div className={styles.ordering__order}>
                <span className={styles.ordering__title}>К оплате</span><span className={styles.ordering__price}>{giveTotalCost()} $</span>
            </div>
            <div className={styles.ordering__buttonContainer}>
                <Link to={`/order/${date}`}><button form="form">Разместить заказ</button></Link>
            </div>
        </div>
    );
}