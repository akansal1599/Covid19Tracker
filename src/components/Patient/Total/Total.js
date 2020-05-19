import React, {useContext} from "react";

import Stats from "./Stats/Stats";
import classes from './Total.module.css';
import {PatientContext} from "../../../contexts/PatientContext";


const Total = (props) => {
    const {total} = useContext(PatientContext);
    const details = ["confirmed", "active", "recovered", "deaths"];
    const array = ["","Total Cases","Active","Recovered","Deaths"];
    let id = 0;
    const data = details.map(sub =>{
        id = id+1;
        const delta = total[`delta${sub}`] > 0 ? `+${total[`delta${sub}`]}` : "";
        if(!total[sub]){
            return "";
        }
        return (<Stats subject={sub} title={array[id]} count={total[sub]} delta={delta} key={id} id={id}/>)
    })


    return (
        <div className={classes.total}>
            {data}
        </div>
    )
}

export default Total;
