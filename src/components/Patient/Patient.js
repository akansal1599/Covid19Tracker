import React from "react";

import Total from "./Total/Total";
import Statewise from "./Statewise/Statewise";
import PatientContextProvider from "../../contexts/PatientContext";
import classes from "./Patient.module.css";

const Patient = (props) => {
    return(
        <PatientContextProvider>
            <h1 className={classes.h1}>Track COVID<span className={classes.span}>19</span> Cases Near You</h1>
            <Total/>
            <Statewise/>
        </PatientContextProvider>
    )
}

export default Patient;
