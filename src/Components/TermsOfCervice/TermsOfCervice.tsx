import React from "react";
import { Terms } from "../Const/Terms";
import styles from "./TermsOfCervice.module.scss"

export const TermsOfCervice: React.FC = () => {


    return (
        <div className={styles.termsOfCervice}>
            {Terms.map(v => 
            <div key={v.id} className={styles.termsOfCervice__item}>
                <div className={styles.termsOfCervice__title}>{v.title}</div>
                <div className={styles.termsOfCervice__discription}>{v.discription}</div>
            </div>)}
        </div>
    );
}