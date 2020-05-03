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

    return(
        <div className={classes.div}>
            <table className={classes.table}>
                <thead>
                <tr>
                    <td className={classes.td}>State/UT</td>
                    <td className={classes.td}>Confirmed</td>
                    <td className={classes.td}>Active</td>
                    <td className={classes.td}>Recovered</td>
                    <td className={classes.td}>Deceased</td>
                </tr>
                </thead>
                <tbody>{data}</tbody>
            </table>
        </div>

    )
}

export default Statewise;
