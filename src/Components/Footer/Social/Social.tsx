import React from "react";
import { SocialImg } from "../../Const/Const";
import { DefaultType } from './../../../Types/DefaultType';
import styles from './../Footer.module.scss'

export const Social: React.FC<DefaultType> = () => {
    return (
        <div className={styles.footer__social}>
            {SocialImg.map((el, index) => <img key={index} src={el.img} alt={el.name}></img>)}
        </div>
    );
}