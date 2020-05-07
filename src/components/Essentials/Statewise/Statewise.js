import React,{useContext} from 'react';

import {EssentialsContext} from "../../../contexts/EssentialsContext";
import classes from './Statewise.module.css';

const Statewise = (props) => {
    const {visible} = useContext(EssentialsContext);
    let id = 0;
    const data = visible.map(obj => {
        id = id+1;
        return(<tr key={id}
                   className={classes.tr}
        >
            <td className={classes.td2}>{obj.city}</td>
            <td className={classes.td2}>{obj.category}</td>
            <td className={classes.td2}><a href={obj.contact}>{obj.nameoftheorganisation}</a></td>
            <td className={classes.td2}>{obj.descriptionandorserviceprovided}</td>
        </tr>)
    })

    return(
        <div className={classes.div}>
            <table className={classes.table}>
                <thead>
                <tr>
                    <td className={classes.td}>City</td>
                    <td className={classes.td}>Category</td>
                    <td className={classes.td}>Organisation</td>
                    <td className={classes.td}>Description</td>
                </tr>
                </thead>
                <tbody>{data}</tbody>
            </table>
        </div>
    )
}

export default Statewise;
