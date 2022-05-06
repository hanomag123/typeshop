import React from "react";
import styles from "./../Footer.module.scss"
import changeLangIcon from "./../../../Assets/Images/Footer/browseIcon.svg"
import { DefaultType } from "../../../Types/DefaultType";


export const ChangeLang: React.FC<DefaultType> = () => {
    return (
            <ul className={styles.footer__changeLang}>
                <img src={changeLangIcon} alt='changeLanguageIcon' />
                <li>Каз</li>
                <li>Руз</li>
                <li>Eng</li>
            </ul>
    );
}