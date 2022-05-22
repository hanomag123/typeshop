import React from "react";
import { Link } from "react-router-dom";
import { usePersistedState } from "../../Hooks/usePersistedState";
import { totalCost } from "../Const/totalCost";
import { IBusket } from "../Product/Product";
import styles from "./Busket.module.scss"
import { BusketEmpty } from "./BusketEmpty/BusketEmpty";
import { BusketItem } from "./BusketItem/BusketItem";


export const Busket: React.FC = () => {
    const [busket, setBusket] = usePersistedState<IBusket[]>([], 'BusketItems')
    if (!busket.length) {
        return <BusketEmpty />
    }
    return (
        <section className={styles.busket}>
            <div className={styles.busket__container}>
                <div className={styles.busket__mainTitle}>Корзина</div>
                {busket.map(el => <BusketItem busket={busket} setBusket={setBusket} id={el.id} name={el.title} count={el.count} price={el.price} img={el.image} key={el.id}/>)}
            </div>
                <div className={styles.busket__total}>
                    <span className={styles.busket__title}>Итого</span> <span className={styles.busket__cost}>{totalCost(busket)}$</span>
                    <Link to='/order'><button className={styles.busket__button}>Перейти к оформлению</button></Link>
                </div>
        </section>
    );
}