import React, {useContext} from "react";

import classes from './Stats.module.css';
import CountUp from 'react-countup';
import { useCountUp } from 'react-countup';

const Stats = (props) => {
    // const {total} = useContext(PatientContext);
    // const array = ["","Total Cases","Active","Recovered","Deaths"];

    // const data = total[props.subject];
    const { countUp } = useCountUp({ end: props.count });

    return(
        <div className={classes.stats} id={props.id}>
            <h4 style={{margin: "1rem 0"}}>{props.title}</h4>
            <div>
                <h1 style={{margin: "1rem 0"}}>{countUp}</h1>
                <h5 style={{margin: "1rem 0"}}>{props.delta}</h5>
            </div>
        </div>
    )
}

export default Stats;
