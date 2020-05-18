import React, {useContext} from "react";
import {PatientContext} from "../../../../contexts/PatientContext";
import classes from './Stats.module.css';

const Stats = (props) => {
    const {total} = useContext(PatientContext);
    const array = ["","Confirmed","Active","Recovered","Deaths"];
    const delta = total[`delta${props.subject}`] > 0 ? `+${total[`delta${props.subject}`]}` : "";
    return(
        <div className={classes.stats} id={props.id}>
            <h4>{array[props.id]}</h4>
            <div>
                <h1>{total[props.subject]}</h1>
                <h6>{delta}</h6>
            </div>
        </div>
    )
}

export default Stats;
