
import Counter from "./Counter";
import { useState } from "react";
function App() {
  const [cnt,setCnt] = useState(0);
  const Increment = () => {
    setCnt(cnt+1)
  }
  const Dicrement = () => {
    setCnt(cnt-1)
  }
  const Reset = () => {
    setCnt(0)
  }
  return (
  <Counter
  no = {cnt}
  plus = {Increment}
  subtraction = {Dicrement}
  reset = {Reset}
  
  />
  );
}

export default App;





