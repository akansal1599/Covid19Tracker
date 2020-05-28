import React, {useContext} from "react";
import {PatientContext} from "../../../contexts/PatientContext";
import State from "./State/State";
import classes from './Statewise.module.css'

const Statewise = (props) => {
    const {states} = useContext(PatientContext);
    let id = 1000;
    const data = states.map(state => {
        id = id+1;
        return(<State name={state.state}
                      key={state.id}
                      confirmed={state.confirmed}
                      deltaconfirmed={state.deltaconfirmed>0 ? `+${state.deltaconfirmed}` : ""}
                      active={state.active}
                      recovered={state.recovered}
                      deltarecovered={state.deltarecovered>0 ? `+${state.deltarecovered}` : ""}
                      deaths={state.deaths}
                      deltadeaths={state.deltadeaths>0 ? `+${state.deltadeaths}` : ""}
        />)
    })
    let confirmed = "Confirmed";
    let recovered = "Recovered";
    function myFunction(x) {
        if (x.matches) { // If media query matches
            confirmed = "Cnfrmd";
            recovered = "Rcvd";
        }
    }

    var x = window.matchMedia("(max-width: 415px)")
    myFunction(x) // Call listener function at run time
    x.addEventListener('DOMContentLoaded',myFunction) // Attach listener function on state changes


    return(
        <div className={classes.div}>
            <table className={classes.table}>
                <thead>
                <tr>
                    <td className={classes.td}>State/UT</td>
                    <td className={classes.td}>{confirmed}</td>
                    <td className={classes.td}>Active</td>
                    <td className={classes.td}>{recovered}</td>
                    <td className={classes.td}>Deaths</td>
                </tr>
                </thead>
                <tbody>{data}</tbody>
            </table>
        </div>

    )
}

export default Statewise;
