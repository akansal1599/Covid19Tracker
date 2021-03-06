import React from 'react';
import classes from './Statewise.module.css';

export const COLUMNS = [
    {
        Header: "City",
        accessor: "city"
    },
    {
        Header: "Category",
        accessor: "category"
    },
    {
        Header: "Organisation",
        accessor: "nameoftheorganisation",
        Cell: ( cellInfo => {
            // console.log(cellInfo);
            const data = cellInfo.cell.row.original;
            return (
                <a href={String(data.contact)} target="_blank" rel="noopener noreferrer">{data.nameoftheorganisation}
                </a>
            )
        })
    },
    {
        Header: "Description",
        accessor: "descriptionandorserviceprovided",
        Cell: (cellInfo => {
             // console.log(cellInfo);
            return (<span className={classes.span}>{cellInfo.cell.row.original.descriptionandorserviceprovided}</span>)
        })
    }
];
