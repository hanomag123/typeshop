import React from "react";
import styles from "./Footer.module.scss"
import { Logo } from "../Header/Logo/Logo";
import { ChangeLang } from "./ChangeLang/ChangeLang";
import { Social } from "./Social/Social";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Logo />
            <nav>
                <ul className={styles.footer__nav}>
                    <li><Link to='/favore'>Избранное</Link></li>
                    <li><Link to='/busket'>Корзина</Link></li>
                    <li>Контакты</li>
                </ul>
            </nav>
            <div className={styles.footer__container}>
                <div><Link to='/terms'>Условия сервиса</Link></div>
                <ChangeLang/>
            </div>
            <Social />
        </footer>
    );
}