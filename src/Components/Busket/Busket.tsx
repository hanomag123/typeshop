import React from "react";
import { usePersistedState } from "../../Hooks/usePersistedState";
import { IBusket } from "../Product/Product";
import styles from "./Busket.module.scss"
import { BusketEmpty } from "./BusketEmpty/BusketEmpty";
import { BusketItem } from "./BusketItem/BusketItem";


export const Busket: React.FC = () => {
    const [busket, setBusket] = usePersistedState<IBusket[]>([], 'BusketItems')
    console.log(busket)
    if (!busket.length) {
        return <BusketEmpty />
    }
    return (
        <section className={styles.busket}>
            {busket.map(el => <BusketItem name={el.title} count={el.count} price={el.price} img={el.image} key={el.id}/>)}
        </section>
    );
}