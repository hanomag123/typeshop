import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./OrderComplete.module.scss"

export const OrderComplete: React.FC = () => {
    const prop = useLocation()
    return (
        <div className={styles.orderComplete}>
            <div className={styles.orderComplete__item}>Номер вашего заказа №{prop.pathname.match(/\d+/gi)}, с Вами свяжется наш менеджер.</div>
            <Link to='/'><button>На главную</button></Link>
        </div>
    );
}