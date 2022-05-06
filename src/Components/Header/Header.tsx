import React from "react";
import styles from "./Header.module.scss"
import BurgerMenuIcon from "./../../Assets/Images/Header/burgerMenuIcon.svg"
import { BusketIcon } from "./BusketIcon/BusketIcon";
import { FavorIcon } from "./FavorIcon/FavorIcon";
import { Logo } from "./Logo/Logo";

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <div className={styles.header__container}>
                <BusketIcon />
                <FavorIcon />
                <img className={styles.header__burgerMenu} src={BurgerMenuIcon} alt="BurgerMenuIcon" />
            </div>
        </header>
    );
}