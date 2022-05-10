import React from "react";
import { Link } from "react-router-dom";
import styles from "./../Header.module.scss"

export const Logo: React.FC = () => {
    return (
        <div className={styles.header__logo}>
            <Link to='/' style={{textDecoration: 'none', color: 'black'}}>QPICK</Link>
        </div>
    );
}