import React from "react";
import styles from "./../Header.module.scss"
import favorImg from "./../../../Assets/Images/Header/favorIcon.svg"

export const FavorIcon: React.FC = ({}) => {
    return (
        <div className={styles.header__favorIcon}>
            <img src={favorImg} alt="BusketImg" />
            <div className={styles.header__favorNum}>1</div>
        </div>
    );
}