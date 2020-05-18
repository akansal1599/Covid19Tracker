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
            <td className={classes.td2}><span>{obj.city}</span></td>
            <td className={classes.td2}><span>{obj.category}</span></td>
            <td className={classes.td2}><a href={obj.contact} target="_blank"><span>{obj.nameoftheorganisation}</span></a></td>
            <td className={classes.td2}><span className={classes.span}>{obj.descriptionandorserviceprovided}</span></td>
        </tr>)
    })

    return(
        <div className={classes.div}>
            <table className={classes.table}>
                <thead>
                <tr className={classes.tr}>
                    <td className={classes.tdhead}>City</td>
                    <td className={classes.tdhead}>Category</td>
                    <td className={classes.tdhead}>Organisation</td>
                    <td className={classes.tdhead}>Description</td>
                </tr>
                </thead>
                <tbody>{data}</tbody>
            </table>
        </div>
    )
}

export default Statewise;
