import React from "react";

import {NavLink} from 'react-router-dom';
import classes from './Toolbar.module.css';

const Toolbar = (props) => {
    return(
        <div className={classes.toolbar}>
            <p className={classes.p}><NavLink to="/" exact><span className={classes.covid}>COVID19</span><span className={classes.tracker}>Tracker</span></NavLink></p>
        </div>
    )
}

export default Toolbar;
