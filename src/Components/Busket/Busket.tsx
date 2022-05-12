import React from "react";
import { usePersistedState } from "../../Hooks/usePersistedState";
import { IBusket } from "../Product/Product";
import styles from "./Busket.module.scss"
import { BusketEmpty } from "./BusketEmpty/BusketEmpty";


export const Busket: React.FC = () => {
    const [busket, setBusket] = usePersistedState<IBusket[]>([], 'BusketItems')
    console.log(busket)
    if (!busket.length) {
        return <BusketEmpty />
    }
    return (
        <section className={styles.busket}>
            {busket.map(el => <div>{el.title}{el.count}</div>)}
        </section>
    );
}