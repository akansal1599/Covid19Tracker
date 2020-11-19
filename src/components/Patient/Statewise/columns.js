import classes from './Statewise.module.css';

export const COLUMNS = [
    {
        Header: 'State/Ut',
        accessor: 'state',
        className:`${classes.data}`
    },
    {
        Header: 'Confirmed',
        accessor: 'confirmed',
        Cell: ({value}) => {
            if(value)
                return editCount(value);
            return "";
        }
    },
    {
        Header: 'Active',
        accessor: 'active',
        Cell: ({value}) => {
            if(value)
                return editCount(value);
            return "";
        }
    },
    {
        Header: 'Recovered',
        accessor: 'recovered',
        Cell: ({value}) => {
            if(value)
                return editCount(value);
            return "";
        }
    },
    {
        Header: 'Deaths',
        accessor: 'deaths',
        Cell: ({value}) => {
            if(value)
                return editCount(value);
            return "";
        }
    }
]

function editCount(value) {
    var lastThree = value.substring(value.length - 3);
    var otherNumbers = value.substring(0, value.length - 3);
    if (otherNumbers !== '')
        lastThree = ',' + lastThree;
    return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
}
