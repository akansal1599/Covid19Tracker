import React from "react";

import {NavLink} from 'react-router-dom';
import classes from './Toolbar.module.css';
import TemporaryDrawer from "./Drawer/Drawer";

const Toolbar = (props) => {
    return(
        <div className={classes.toolbar}>
            <TemporaryDrawer/>
            <div className={classes.p}>
                <NavLink to="/" exact style={{textDecoration:"none"}}>
                    <p className={classes.covid}>COVID19</p>
                    <p className={classes.tracker}>TRACKER</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Toolbar;
