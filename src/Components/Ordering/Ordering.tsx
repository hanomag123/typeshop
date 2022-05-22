import React, { useCallback } from "react";
import { IBusket } from "../Product/Product";
import styles from "./Ordering.module.scss"

export const Ordering: React.FC = () => {
    const busket:IBusket[] = JSON.parse(localStorage.getItem('BusketItems') || '[]')

    const giveTotalCost = useCallback((): number => {
        return +(busket.reduce((num: number, item: IBusket) => num + item.price * item.count, 0)).toFixed(2)
    }, [busket])
    return (
        <div className={styles.ordering}>
            <div>
                <span className={styles.ordering__title}>Товары</span>
                <div>
                    {busket.map(item => <div key={item.id}>{item.count} x {item.title}</div>)}
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