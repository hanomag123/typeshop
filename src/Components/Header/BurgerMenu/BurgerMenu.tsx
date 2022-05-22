import React, { useEffect, useReducer, useState } from "react";
import styles from "./BurgerMenu.module.scss"
import mobileIcon from './../../../Assets/Images/Header/mobileIcon.svg'
import favorIcon from './../../../Assets/Images/Header/favorIconBurger.svg'
import docIcon from './../../../Assets/Images/Header/docIcon.svg'
import phoneIcon from './../../../Assets/Images/Header/phoneIcon.svg'
import langIcon from './../../../Assets/Images/Header/langIcon.svg'
import { Link, useLocation } from "react-router-dom";
import { Filter } from "../../Catalog/Filter/Filter";

interface IProps {
    toogle: boolean
    useToogle: React.DispatchWithoutAction
}

export const BurgerMenu: React.FC<IProps> = ({toogle, useToogle}) => {
    const [active, setActive] = useReducer(current => !current, false)
    const [display, setDisplay] = useState(false)
    const {pathname} = useLocation()
    useEffect(() => {
        pathname === '/' ? (setDisplay(true)) : setDisplay(false)
    }, [pathname])
    return (
        <ul className={styles.burgerMenu + ' ' + (toogle && styles.burgerMenu__active)}>
            {display && <li onClick={setActive} className={styles.burgerMenu__item}><img src={mobileIcon} alt="mobileIcon" /><span>Выбрать категорию</span></li>}
            {active && display && <Filter />}
            <Link onClick={useToogle} to='/favore'><li className={styles.burgerMenu__item}><img src={favorIcon} alt="favorIcon" /><span>Избранное</span> </li></Link>
            <Link onClick={useToogle} to='/terms'><li className={styles.burgerMenu__item}><img src={docIcon} alt="docIcon" /><span>Условия сервиса</span></li></Link>
            <li className={styles.burgerMenu__item}><img src={phoneIcon} alt="phoneIcon" /><span>Контакты</span></li>
            <li className={styles.burgerMenu__item}><img src={langIcon} alt="langIcon" /><span>Каз</span> <span>Рус</span> <span>Eng</span></li>
        </ul>
    );
}