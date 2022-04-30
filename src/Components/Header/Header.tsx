import React from "react";
import styles from "./Header.module.scss"
import BurgerMenuIcon from "./../../Assets/Images/Header/burgerMenuIcon.svg"
import { HeaderIcon } from "./HeaderIcon/HeaderIcon";

export const Header: React.FC = ({}) => {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>QPICK</div>
            <div className={styles.header__container}>
                <HeaderIcon />
                <img src={BurgerMenuIcon} alt="BurgerMenuIcon" />
            </div>
        </header>
    );
}