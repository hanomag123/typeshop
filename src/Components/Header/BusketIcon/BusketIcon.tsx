import React from "react";
import { Link } from 'react-router-dom'
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import BusketImg from "./../../../Assets/Images/Header/busketIcon.svg"
import styles from "./../Header.module.scss"

export const BusketIcon: React.FC = () => {
    const {busketCount} = useTypedSelector(state => state.busket)
    return (
        <Link to='/busket'>
            <div className={styles.header__icon}>
                <img src={BusketImg} alt="BusketImg" />
                <div className={styles.header__num}>{busketCount}</div>
            </div>
        </Link>
    );
}