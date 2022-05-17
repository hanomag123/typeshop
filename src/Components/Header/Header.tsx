import React, { useReducer } from "react";
import styles from "./Header.module.scss"
import BurgerMenuIcon from "./../../Assets/Images/Header/burgerMenuIcon.svg"
import { BusketIcon } from "./BusketIcon/BusketIcon";
import { FavorIcon } from "./FavorIcon/FavorIcon";
import { Logo } from "./Logo/Logo";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";

export const Header: React.FC = () => {
    const [toogle, useToogle] = useReducer(toogle => !toogle, false)
    return (
        <header className={styles.header}>
            <Logo />
            <div className={styles.header__container}>
                <BusketIcon/>
                <FavorIcon />
                <img onClick={useToogle} className={styles.header__burgerMenu} src={BurgerMenuIcon} alt="BurgerMenuIcon" />
                <BurgerMenu toogle={toogle}/>
            </div>
        </header>
    );
}