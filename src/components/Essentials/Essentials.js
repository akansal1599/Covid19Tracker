import React from 'react';

import Search from "./Search/Search";
import EssentialsContextProvider from "../../contexts/EssentialsContext";
import Statewise from "./Statewise/Statewise";
import classes from "./Essentials.module.css";

const Essentials = (props) => {
    return(
        <EssentialsContextProvider>
            <h1 className={classes.h1}>View Essentials Nearby Offering Special Assistance</h1>
            <Search/>
            <Statewise/>
        </EssentialsContextProvider>
    )
}

export default Essentials;
