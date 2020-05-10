import React from "react";

import {NavLink} from 'react-router-dom';
import classes from './Toolbar.module.css';
import TemporaryDrawer from "./Drawer/Drawer";

const Toolbar = (props) => {
    return(
        <div className={classes.toolbar}>
            <TemporaryDrawer/>
            <p className={classes.p}><NavLink to="/" exact style={{textDecoration:"none"}}><span className={classes.covid}>COVID19</span><span className={classes.tracker}>Tracker</span></NavLink></p>
        </div>
    )
}

export default Toolbar;
