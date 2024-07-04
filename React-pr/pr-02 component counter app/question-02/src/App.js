import Counter from "./Counter";
import { useState } from "react";
import "./style.css"

function App() {
  //use state

  const [cnt, setCnt] = useState(0);
  const Increment = () => {
    setCnt(cnt + 1)
  }

  const Dicrement = () => {
    setCnt(cnt - 1)
  }

  const Reset = () => {
    setCnt(0)
  }

  return (

    <Counter
    //passing props

      no={cnt}
      plus={Increment}
      subtraction={Dicrement}
      reset={Reset}

    />
  );
}

export default App;



