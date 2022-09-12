import './Table.css';

const TableRow=({stock})=>{
    return (
        <tr>
            <td>{stock.id}</td>
            <td>{stock.name}</td>
            <td>{stock.ticker}</td>
            <td>${stock.price}</td>
            <td>{stock.gain}%</td>
        </tr>
    );
}

export default TableRow;