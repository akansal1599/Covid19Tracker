import React,{useContext} from 'react';

import {EssentialsContext} from "../../../contexts/EssentialsContext";
import classes from './Search.module.css';

const Search = (props) => {

    const {states,cities,categories,selected,InputChangeHandler,SubmitHandler} = useContext(EssentialsContext);
    let id = 0;
    const States = states.map(state => (<option key={id++} value={state}>{state}</option>));
    const Cities = cities.map(city => (<option key={id++} value={city}>{city}</option>));
    const Categories = categories.map(category => (<option key={id++} value={category}>{category}</option>));


    const StateChangeHandler = (event) => {
        event.preventDefault();
        InputChangeHandler(0,event.target.value);
         // console.log(event.target.value);
    }
    const CityChangeHandler = (event) => {
        event.preventDefault();
        InputChangeHandler(1,event.target.value);
        // console.log(event.target.value);
    }
    const CategoryChangeHandler = (event) => {
        event.preventDefault();
        InputChangeHandler(2,event.target.value);
        // console.log(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        SubmitHandler();
    }


    return(
        <form className={classes.form}>
            <label className={classes.label}>
                <select className={classes.dropdown} value={selected[0]} onChange={StateChangeHandler}>
                    {States}
                </select>
            </label>
            <label className={classes.label}>
                <select className={classes.dropdown} value={selected[1]} onChange={CityChangeHandler}>
                    {Cities}
                </select>
            </label>
            <label className={classes.label}>
                <select className={classes.dropdown} value={selected[2]} onChange={CategoryChangeHandler}>
                    {Categories}
                </select>
            </label>
            <input className={classes.button} type="submit" value="Search" onClick={submitHandler} />
        </form>
    )
}

export default Search;
