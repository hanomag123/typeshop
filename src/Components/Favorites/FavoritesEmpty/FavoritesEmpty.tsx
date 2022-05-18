import React from "react";
import { Link } from "react-router-dom";
import styles from "./FavoritesEmpty.module.scss"

export const FavoritesEmpty: React.FC = () => {
    return (
    <section className={styles.favoritesEmpty}>
        <div className={styles.favoritesEmpty__container}>
            <div className={styles.favoritesEmpty__title}>Каталог избранного пуст</div>
            <div className={styles.favoritesEmpty__discription}>Но это никогда не поздно исправить :)</div>
        </div>
        <Link to='/'><button className={styles.favoritesEmpty__button}>В каталог товаров</button></Link>
    </section>
    );
}