 import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const PatientContext = createContext();

const PatientContextProvider = (props) => {
    const[total, setTotal] = useState({});

    const[states, setStates] = useState([{}]);

    const fetchData = () => {
        // event.preventDefault();
        let str = "https://api.covid19india.org/data.json";
        axios.get(str)
            .then(response => {
                setTotal(response.data.statewise[0]);
                setStates(response.data.statewise.slice(1));
            });
    };

    useEffect(() => {
        fetchData();
    },[]);

    return (
        <PatientContext.Provider value={{total,states}}>
            {props.children}
        </PatientContext.Provider>
    );
}

export default PatientContextProvider;
