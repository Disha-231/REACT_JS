import './App.css';
import Record from './Record';
import { category, product } from './Data';
import { useState } from 'react';



function App() {
  const [record, setRecord] = useState(product);

  const filterData = (cat) => {
    if (cat === "all") {
      setRecord(product)
    } else {
      let data = product.filter((item) => item.category === cat)
      setRecord(data)
    } 
  }


  return (
    <>
      <Record category={category} filterBtn={filterData} product={record} />
    </>
  );
}

export default App;

