import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {NavLink} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            {/*<List>*/}
            {/*    <ListItem button key="Home">*/}
            {/*        <NavLink to="/" exact>*/}
            {/*            <ListItemIcon><HomeIcon/></ListItemIcon>*/}
            {/*            <ListItemText primary="Home" />*/}
            {/*        </NavLink>*/}
            {/*    </ListItem>*/}
            {/*    <li><NavLink to="/essentials" exact>Essentials</NavLink></li>*/}
            {/*</List>*/}

            <List>
                <NavLink to="/" exact style={{textDecoration:"none", color:"#383636"}}>
                    <ListItem button key='Home'>
                        <ListItemIcon><HomeIcon/></ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </NavLink>
                <NavLink to="/essentials" exact style={{textDecoration:"none", color: "#383636"}}>
                    <ListItem button key='essentials'>
                        <ListItemIcon><ListAltIcon/></ListItemIcon>
                        <ListItemText primary="Essentials" />
                    </ListItem>
                </NavLink>
            </List>
            {/*<Divider />*/}
            {/*<List>*/}
            {/*    {['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
            {/*        <ListItem button key={text}>*/}
            {/*            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
            {/*            <ListItemText primary={text} />*/}
            {/*        </ListItem>*/}
            {/*    ))}*/}
            {/*</List>*/}
        </div>
    );

    return (
        <div style={{float:'left'}}>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><HomeIcon/></Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
