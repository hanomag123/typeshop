import React from "react";
import { BusketEmpty } from "../Busket/BusketEmpty/BusketEmpty";
import { Oops } from "../Oops/Oops";
import { IBusket } from "../Product/Product";
import styles from "./Ordering.module.scss"

export const Ordering: React.FC = () => {
    const busket:IBusket[] = JSON.parse(localStorage.getItem('BusketItems') || '[]')

    const giveTotalCost = ((): number => {
        return +(busket.reduce((num: number, item: IBusket) => num + item.price * item.count, 0)).toFixed(2)
    })

    if (!busket.length) {
        return <BusketEmpty />
    }
    return (
        <div className={styles.ordering}>
            <div>
                <span className={styles.ordering__title}>Товары</span>
                <div>
                    {busket.map(item => (
                    <div className={styles.ordering__productItem} key={item.id}>
                        <img className={styles.ordering__image} src={item.image} alt='ImageItem'/>
                        <div className={styles.ordering__wrapper}>
                            <div>{item.count} x {item.title}</div>
                            <div>{item.count * item.price}</div>
                        </div >
                        <div>{item.price}</div>
                    </div>))}
                </div>
            </div>
            <div>
                <span>Доставка курьером</span><span>100</span>
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
            <div>
                <span className={styles.ordering__title}>К оплате</span><span>{giveTotalCost()}</span>
            </div>
            <div>
                <button form="form">Разместить заказ</button>
            </div>
        </div>
    );
}