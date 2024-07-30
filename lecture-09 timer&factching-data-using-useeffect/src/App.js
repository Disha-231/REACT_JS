// import {useEffect , useState} from "react";

// function App() {
//   const [ cnt, setCnt] = useState(0)
//   useEffect(()=>{
//     setTimeout(() => {
//       setCnt(cnt+1)
//     }, 1000);
//   },[])
//   return (
//   <>
//     <h1>Timer:- {cnt}</h1>
//   </>
//   );
// }

// export default App;


// API calling:--------------------------------------------------------

import { useEffect, useState } from "react";

function App() {

  const [products, setProduct] = useState([])
  const [total, setTotal] = useState("")
  const [skip, setSkip] = useState("")
  const [limit, setLimit] = useState("")
  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then(data => data.json())
      .then((res => {
        console.log(res);
        setProduct(res.products)
        setTotal(res.total)
        setSkip(res.skip)
        setLimit(res.limit)
      }))
  },[])
  return (
    <>
      <h1>Total:- {total}</h1>
      <h1>Skip:- {skip}</h1>
      <h1>Limit:- {limit}</h1>
      {
        products.map((p) => {
          
     return(
      <>
      <h1>Title:- {p.title}</h1>
      <h1>Price:- {p.price}</h1>
      <h1>Rating:- {p.rating}</h1>
    </>
     )
        })
      }
    </>
  );
}

export default App;
