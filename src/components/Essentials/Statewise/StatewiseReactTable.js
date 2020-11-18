import React, {useContext, useMemo} from 'react';
import {useSortBy, useTable} from 'react-table';
import {EssentialsContext} from "../../../contexts/EssentialsContext";
import classes from './Statewise.module.css';
import {COLUMNS} from "./Table/columns";

const Statewise = (props) => {
    const {visible} = useContext(EssentialsContext);
    const columns = useMemo(() => COLUMNS,[]);
    const data = visible;

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    }, useSortBy)

    return(
        <div className={classes.div}>
            <table className={classes.table} {...getTableProps()}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr className={classes.tr} {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th className={classes.tdhead} {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row);
                    return (
                        <tr className={classes.tr} {...row.getRowProps()}>
                            {row.cells.map(cell => (
                                <td className={classes.td2} {...cell.getCellProps}>{cell.render('Cell')}</td>
                            ))}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Statewise;
