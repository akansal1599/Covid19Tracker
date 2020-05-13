import React from "react";
import Stats from "./Stats/Stats";
import classes from './Total.module.css';

const Total = (props) => {
    const details = ["confirmed", "active", "recovered", "deaths"];
    let id = 0;
    const data = details.map(sub =>{
        id = id+1;
        return (<Stats subject={sub} key={id} id={id}/>)
    })

    return (
        <div className={classes.total}>
            {data}
        </div>
    )
}

export default Total;
