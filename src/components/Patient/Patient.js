import React from "react";

import Total from "./Total/Total";
import Statewise from "./Statewise/Statewise";
import PatientContextProvider from "../../contexts/PatientContext";

const Patient = (props) => {
    return(
        <PatientContextProvider>
            <Total/>
            <Statewise/>
        </PatientContextProvider>
    )
}

export default Patient;
