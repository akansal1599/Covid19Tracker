import React from 'react';
// import classes from './Layout.css';
import Toolbar from "./Toolbar/Toolbar";
import classes from './Layout.module.css';
// import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
// import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {
    // state = {
    //     showSideDrawer: false
    // }
    //
    // sideDrawerClosedHandler = () => {
    //     this.setState({showSideDrawer: false});
    // }
    //
    // sideDrawerToggleHandler = () => {
    //     this.setState((prevState) => {
    //             return {showSideDrawer: !prevState.showSideDrawer};
    //         }   );
    // }


    return (
        <div className={classes.div}>
            {/*<Toolbar />*/}
            {/*<SideDrawer*/}
            {/*    open={this.state.showSideDrawer}*/}
            {/*    closed={this.sideDrawerClosedHandler}*/}
            {/*/>*/}
            {/*<main className={classes.content}>*/}
            <Toolbar/>
            <main>
                {props.children}
            </main>
            {/*</main>*/}
        </div>
    );
}


export default Layout;
