import React from "react";
import styles from "./BusketItem.module.scss"
import PlusImg from './../../../Assets/Images/Busket/plus.svg'
import MinusImg from './../../../Assets/Images/Busket/minus.svg'


interface IBusketProps {
    name: string
    count: number
    price: number
    img: string
}

export const BusketItem: React.FC<IBusketProps> = ({name, count, price, img}) => {
    return (
        <div className={styles.busketItem}>
            <img src={img} alt={name} />
            <div>{name}</div>
            <div>{price}$</div>
            <div className={styles.busketItem__countContainer}>
                <button className={styles.busketItem__button}><img src={PlusImg} alt='plusImage'/></button>
                <div className={styles.busketItem__count}>{count}</div>
                <button className={styles.busketItem__button}><img className={styles.busketItem__minusImg} src={MinusImg} alt='minusImage'/></button>
            </div>
        </div>
    );
}