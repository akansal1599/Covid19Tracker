import React from 'react';

import Toolbar from "./Toolbar/Toolbar";
import classes from './Layout.module.css';
import Footer from "./Footer/Footer";

const Layout = (props) => {

    return (
        <div className={classes.div}>
            <Toolbar/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </div>
    );
}


export default Layout;
