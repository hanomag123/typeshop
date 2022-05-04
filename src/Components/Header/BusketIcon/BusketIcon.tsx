import React from "react";
import BusketImg from "./../../../Assets/Images/Header/busketIcon.svg"
import styles from "./../Header.module.scss"

export const BusketIcon: React.FC = ({}) => {
    return (
        <div className={styles.header__icon}>
            <img src={BusketImg} alt="BusketImg" />
            <div className={styles.header__num}>1</div>
        </div>
    );
}