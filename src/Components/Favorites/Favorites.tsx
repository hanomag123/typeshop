import React from "react";
import { usePersistedState } from "../../Hooks/usePersistedState";
import { IProduct } from "../../Types/Product";
import { BusketEmpty } from "../Busket/BusketEmpty/BusketEmpty";
import { CatalogItem } from "../Catalog/CatalogItem/CatalogItem";
import styles from "./Favorites.module.scss"
import { FavoritesEmpty } from "./FavoritesEmpty/FavoritesEmpty";

export const Favorites: React.FC = () => {
    const [items] = usePersistedState<IProduct[]>([], 'FavoriteItems');
    if (!items.length) {
        return <FavoritesEmpty />
    }
    return (
        <div className={styles.favorites}>
            {items.map(item => <CatalogItem key={item.id} id={item.id} image={item.image} price={item.price} rate={item.rating.rate} title={item.title} single={true}/>)}
        </div>
    );
}