import React from "react";
import { Link } from "react-router-dom";
import { SocialImg } from "../Const/Const";
import styles from "./Contacts.module.scss"

export const Contacts: React.FC = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.contacts__container}>
                {SocialImg.map((item, i) => <div key={i} className={styles.contacts__apps}><img src={item.img} alt={item.name} /></div>)}
            </div>
            <Link to='/'><button>На главную</button></Link>
        </div>
    );
}