import React from "react";
import classes from './State.module.css';

const State = (props) => {
    return(
        <tr className={classes.tr} key={props.key}>
            <td className={classes.data}>{props.name}</td>
            <td className={classes.td}><span className={`${classes.delta} ${classes.confirmed}`}>{props.deltaconfirmed}</span> <span>{props.confirmed}</span></td>
            <td className={classes.td}>{props.active}</td>
            <td className={classes.td}><span className={`${classes.delta} ${classes.recovered}`}>{props.deltarecovered}</span> <span>{props.recovered}</span></td>
            <td className={classes.td}><span className={classes.delta}>{props.deltadeaths}</span> <span>{props.deaths}</span></td>
        </tr>
    )
}

export default State;
