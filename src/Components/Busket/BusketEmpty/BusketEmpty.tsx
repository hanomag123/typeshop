import React from "react";
import styles from "./BusketEmpty.module.scss"
import { Link } from "react-router-dom";
import BusketImage from './../../../Assets/Images/Busket/Busket.svg'

export const BusketEmpty: React.FC = () => {
    return (
            <section className={styles.busketEmpty}>
                <div className={styles.busketEmpty__container}>
                    <img src={BusketImage} alt='BusketImag'/>
                    <div className={styles.busketEmpty__title}>Корзина пуста</div>
                    <div className={styles.busketEmpty__discription}>Но это никогда не поздно исправить :)</div>
                </div>
                <Link to='/'><button className={styles.busketEmpty__button}>В каталог товаров</button></Link>
            </section>
    );
}