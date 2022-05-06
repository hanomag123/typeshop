import React from "react";
import styles from "./CatalogItem.module.scss"

interface IItem {
    title: string
    price: number
    rate: number
    image: string
}

export const CatalogItem: React.FC<IItem> = ({title, price, rate, image}) => {
    return (
        <div className={styles.catalogItem}>
            <img className={styles.catalogItem__image} src={image} alt={title} />
            <div className={styles.catalogItem__title}>{title}</div>
            <div className={styles.catalogItem__price}>{price}</div>
            <div className={styles.catalogItem__rate}>{rate}</div>
        </div>
    );
}