import React from "react";
import styles from "./Footer.module.scss"
import { Logo } from "../Header/Logo/Logo";
import { ChangeLang } from "./ChangeLang/ChangeLang";
import { Social } from "./Social/Social";

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Logo />
            <nav>
                <ul className={styles.footer__nav}>
                    <li>Избранное</li>
                    <li>Корзина</li>
                    <li>Контакты</li>
                </ul>
            </nav>
            <div className={styles.footer__container}>
                <div>Условия сервиса</div>
                <ChangeLang/>
            </div>
            <Social />
        </footer>
    );
}