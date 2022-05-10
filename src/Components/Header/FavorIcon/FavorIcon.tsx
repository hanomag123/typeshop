import React, { useEffect, useState } from "react";
import styles from "./../Header.module.scss"
import favorImg from "./../../../Assets/Images/Header/favorIcon.svg"
import { useTypedSelector } from "../../../Hooks/useTypedSelector";

export const FavorIcon: React.FC = () => {
    let [num, setNum] = useState<number>(JSON.parse(localStorage.getItem('FavoriteItems') || '[]').length)
    const {favorite} = useTypedSelector(state => state.favorite)
    useEffect(() => {
        setNum(favorite)
    }, [favorite])
    return (
        <div className={styles.header__favorIcon}>
            <img src={favorImg} alt="BusketImg" />
            <div className={styles.header__favorNum}>{num}</div>
        </div>
    );
}