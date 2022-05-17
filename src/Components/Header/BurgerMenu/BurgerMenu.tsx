import React from "react";
import styles from "./BurgerMenu.module.scss"
import mobileIcon from './../../../Assets/Images/Header/mobileIcon.svg'
import favorIcon from './../../../Assets/Images/Header/favorIconBurger.svg'
import docIcon from './../../../Assets/Images/Header/docIcon.svg'
import phoneIcon from './../../../Assets/Images/Header/phoneIcon.svg'
import langIcon from './../../../Assets/Images/Header/langIcon.svg'
import { Link } from "react-router-dom";

interface IProps {
    toogle: boolean
}

export const BurgerMenu: React.FC<IProps> = ({toogle}) => {
    return (
        <ul className={styles.burgerMenu + ' ' + (toogle && styles.burgerMenu__active)}>
            <li className={styles.burgerMenu__item}><img src={mobileIcon} alt="mobileIcon" /><span>Выбрать модель телефона</span></li>
            <Link to='/favore'><li className={styles.burgerMenu__item}><img src={favorIcon} alt="favorIcon" /><span>Избранное</span> </li></Link>
            <li className={styles.burgerMenu__item}><img src={docIcon} alt="docIcon" /><span>Условия сервиса</span></li>
            <li className={styles.burgerMenu__item}><img src={phoneIcon} alt="phoneIcon" /><span>Контакты</span></li>
            <li className={styles.burgerMenu__item}><img src={langIcon} alt="langIcon" /><span>Каз</span> <span>Рус</span> <span>Eng</span></li>
        </ul>
    );
}