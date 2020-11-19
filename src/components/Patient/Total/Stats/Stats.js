import React from "react";
import classes from './Stats.module.css';
import { useCountUp } from 'react-countup';

const Stats = (props) => {
    const { countUp } = useCountUp({ end: props.count });

    function editCount(value) {
        // console.log(value);
        var x = value.toString();
        var lastThree = x.substring(x.length - 3);
        var otherNumbers = x.substring(0, x.length - 3);
        if (otherNumbers !== '')
            lastThree = ',' + lastThree;
        return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    }

    return(
        <div className={classes.stats} id={props.id}>
            <h4 style={{margin: "1rem 0"}}>{props.title}</h4>
            <div>
                <h1 style={{margin: "1rem 0"}}>{editCount(countUp)}</h1>
                <h5 style={{margin: "1rem 0"}}>{props.delta}</h5>
            </div>
        </div>
    )
}

export default Stats;
