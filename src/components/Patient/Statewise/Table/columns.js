import classes from '../Statewise.module.css';

export const COLUMNS = [
    {
        Header: 'State/Ut',
        accessor: 'state',
        className:`${classes.data}`
    },
    {
        Header: 'Confirmed',
        accessor: 'confirmed'
    },
    {
        Header: 'Active',
        accessor: 'active'
    },
    {
        Header: 'Recovered',
        accessor: 'recovered'
    },
    {
        Header: 'Deaths',
        accessor: 'deaths'
    }
]
