import {FaAngleUp,FaAngleDown} from 'react-icons/fa';

import TableRow from './TableRow';

import './Table.css';

const Table=({stocks,priceSortOrder,gainSortOrder,clickHandler})=>{
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>股票Id</th>
                    <th>股票名稱</th>
                    <th>股票代碼</th>
                    <th><span className="cursor" onClick={()=>clickHandler("price")}>價格 {priceSortOrder==="由小到大" && <FaAngleUp />}{priceSortOrder==="由大到小" && <FaAngleDown />}</span></th>
                    <th><span className="cursor" onClick={()=>clickHandler("gain")}>漲幅 {gainSortOrder==="由小到大" && <FaAngleUp />}{gainSortOrder==="由大到小" && <FaAngleDown />}</span></th>
                </tr>
            </thead>
            <tbody>
                {stocks && stocks.map(stock=>(
                    <TableRow key={stock.id} stock={stock} />
                ))}
            </tbody>
        </table>
    );
}

export default Table;