import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"


function App() {
  const [product, setProduct] = useState([])
  const getproduct = async () => {
    try {
      let all = await axios.get(`https://dummyjson.com/products`)
      let res = await all.json()
      console.log(res.product);
      setProduct(all.data.product)
    }
    catch (err) {
      return false;
    }
  }
  useEffect(() => {
    getproduct()
  }, [])
  console.log(product);
  return (
    <>

    </>
  )
}

export default App
