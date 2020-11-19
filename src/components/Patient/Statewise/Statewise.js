import React, {useContext, useMemo} from 'react'
import {useTable, useSortBy} from 'react-table';
import {PatientContext} from "../../../contexts/PatientContext";
import {COLUMNS} from './columns';
import classes from './Statewise.module.css';

const Statewise = (props) => {
    const {states} = useContext(PatientContext);
    const columns = useMemo(() => COLUMNS, []);
    const data = states;
    // console.log(states);
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

    const deltaFunc = (name,id) => {
        const delta = ["confirmed", "recovered", "deaths"];
        const color = ["red", "green", "grey"];
        if(delta.includes(name)){
            const change = data[id][`delta${name}`];
            if(change>0){
                return (<span style={{color:`${color[delta.indexOf(name)]}`}}>+{change}</span>)
            }
        }
    }

    return(
        <div className={classes.div}>
            <table className={classes.table} {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th className={classes.th}{...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? ' ↓' : ' ↑') : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                        )
                    )}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr className={classes.tr} {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                // deltaFunc(cell.column.id,cell.row.id);
                                return (<td className={classes.td} {...cell.getCellProps({className: cell.column.className})}>
                                    {deltaFunc(cell.column.id,cell.row.id)} <br></br>
                                     {cell.render('Cell')}
                                </td>)
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>

    )

}

export default Statewise;
