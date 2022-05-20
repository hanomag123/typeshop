import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import { FilterCategory, FilterType, IFilter } from "../../../Store/Reducers/FilterReducer";
import styles from "./Filter.module.scss"

export const Filter: React.FC = () => {
    const dispatch = useDispatch()
    const {filter}: IFilter = useTypedSelector(state => state.filter)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
        dispatch({type: FilterType.UPDATE_FILTER, payload: filter[event.target.id as FilterCategory] = !filter[event.target.id as FilterCategory]})
    }
    return (
        <div className={styles.filter}>
                <FormGroup>
                <FormControlLabel control={<Checkbox id={FilterCategory.JEWELERY} onChange={handleChange} checked={filter[FilterCategory.JEWELERY]}/>} label={FilterCategory.JEWELERY} />
                <FormControlLabel control={<Checkbox id={FilterCategory.ELECTRONICS} onChange={handleChange} checked={filter[FilterCategory.ELECTRONICS]}/>} label={FilterCategory.ELECTRONICS} />
                <FormControlLabel control={<Checkbox id={FilterCategory.MENSCLOTHING} onChange={handleChange} checked={filter[FilterCategory.MENSCLOTHING]}/>} label={FilterCategory.MENSCLOTHING} />
                <FormControlLabel control={<Checkbox id={FilterCategory.WOMENSCLOTHING} onChange={handleChange} checked={filter[FilterCategory.WOMENSCLOTHING]}/>} label={FilterCategory.WOMENSCLOTHING} />
                </FormGroup>
        </div>
    );
}