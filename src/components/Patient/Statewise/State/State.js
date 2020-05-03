import React from "react";
import classes from './State.module.css';

const State = (props) => {
    return(
        <tr className={classes.tr} key={props.key}>
            <td className={classes.data}>{props.name}</td>
            <td className={classes.td}><span className={`${classes.delta} ${classes.confirmed}`}>{props.deltaconfirmed}</span> {props.confirmed}</td>
            <td className={classes.td}>{props.active}</td>
            <td className={classes.td}><span className={`${classes.delta} ${classes.recovered}`}>{props.deltarecovered}</span> {props.recovered}</td>
            <td className={classes.td}><span className={classes.delta}>{props.deltadeaths}</span> {props.deaths}</td>
        </tr>
    )
}

export default State;
