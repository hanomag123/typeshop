import React from "react";
import styles from "./../Header.module.scss"

export const Logo: React.FC = ({}) => {
    return (
        <div className={styles.header__logo}>
            QPICK
        </div>
    );
}