import React, { useEffect, useReducer, useState } from "react";
import styles from "./Header.module.scss"
import BurgerMenuIcon from "./../../Assets/Images/Header/burgerMenuIcon.svg"
import { BusketIcon } from "./BusketIcon/BusketIcon";
import { FavorIcon } from "./FavorIcon/FavorIcon";
import { Logo } from "./Logo/Logo";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { Filter } from "../Catalog/Filter/Filter";
import mobileIcon from './../../Assets/Images/Header/mobileIcon.svg'
import { useLocation } from "react-router-dom";

export const Header: React.FC = () => {
    const [toogle, useToogle] = useReducer(toogle => !toogle, false)
    const [active, setActive] = useReducer(current => !current, false)
    const [display, setDisplay] = useState(false)
    const {pathname} = useLocation()
    useEffect(() => {
        pathname === '/' ? (setDisplay(true)) : setDisplay(false)
    }, [pathname])
    return (
        <header className={styles.header}>
            <Logo />
            {display && <div onClick={setActive} className={styles.header__filterTitle}>
                <img src={mobileIcon} alt="mobileIcon" />
                <span>Выбрать категорию</span>
            </div>}
            {display && active && <div className={styles.header__filter}><Filter /></div>}
            <div className={styles.header__container}>
                <BusketIcon/>
                <FavorIcon />
                <img onClick={useToogle} className={styles.header__burgerMenu} src={BurgerMenuIcon} alt="BurgerMenuIcon" />
                <BurgerMenu toogle={toogle} useToogle={useToogle}/>
            </div>
        </header>
    );
}