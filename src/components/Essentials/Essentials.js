import React from 'react';

import Search from "./Search/Search";
import EssentialsContextProvider from "../../contexts/EssentialsContext";
import Statewise from "./Statewise/Statewise";

const Essentials = (props) => {
    return(
        <EssentialsContextProvider>
            <Search/>
            <Statewise/>
        </EssentialsContextProvider>
    )
}

export default Essentials;
