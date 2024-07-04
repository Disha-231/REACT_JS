import {useEffect , useState} from "react";

function App() {
  const [ cnt, setCnt] = useState(0)
  useEffect(()=>{
    setTimeout(() => {
      setCnt(cnt+1)
    }, 1000);
  })
  return (
  <>
    <div align="center">
    <h1>Timer:- {cnt}</h1>
    </div>
  </>
  );
}

export default App;