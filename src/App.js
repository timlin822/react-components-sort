import {useState} from 'react';

import Table from 'components/table/Table';

import STOCKS_DATA from 'data/StocksData';

import './App.css';

function App() {
  const [stocks,setStocks]=useState(STOCKS_DATA);
  const [priceSortOrder,setPriceSortOrder]=useState("平盤");
  const [gainSortOrder,setGainSortOrder]=useState("平盤");

  const clickHandler=(column)=>{
    if(column==="price"){
      setGainSortOrder("平盤");
      if(priceSortOrder==="平盤"){
        setPriceSortOrder("由大到小");
        setStocks([...stocks].sort((a,b)=>(
          a[column]<b[column] ? 1 : -1
        )));
      }
      else if(priceSortOrder==="由大到小"){
        setPriceSortOrder("由小到大");
        setStocks([...stocks].sort((a,b)=>(
          a[column]>b[column] ? 1 : -1
        )));
      }
      else if(priceSortOrder==="由小到大"){
        setPriceSortOrder("平盤");
        setStocks(STOCKS_DATA);
      }
    }
    else if(column==="gain"){
      setPriceSortOrder("平盤");
      if(gainSortOrder==="平盤"){
        setGainSortOrder("由大到小");
        setStocks([...stocks].sort((a,b)=>(
          a[column]<b[column] ? 1 : -1
        )));
      }
      else if(gainSortOrder==="由大到小"){
        setGainSortOrder("由小到大");
        setStocks([...stocks].sort((a,b)=>(
          a[column]>b[column] ? 1 : -1
        )));
      }
      else if(gainSortOrder==="由小到大"){
        setGainSortOrder("平盤");
        setStocks(STOCKS_DATA);
      }
    }
  };

  return (
    <section className="section-padding bg-height">
      <div className="container container-padding">
        <Table stocks={stocks} priceSortOrder={priceSortOrder} gainSortOrder={gainSortOrder} clickHandler={clickHandler} />
      </div>
    </section>
  );
}

export default App;