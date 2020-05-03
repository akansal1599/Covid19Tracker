import React from "react";
import classes from './Toolbar.module.css';

const Toolbar = (props) => {
    return(
        <div className={classes.toolbar}>
            <p className={classes.p}><span className={classes.covid}>COVID19</span><span className={classes.tracker}>Tracker</span></p>
        </div>
    )
}

export default Toolbar;
