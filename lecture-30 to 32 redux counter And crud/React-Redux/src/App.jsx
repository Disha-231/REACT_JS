import { BrowserRouter, Route, Routes } from "react-router-dom"
import Counter from "./Pages/Counter"
import Add from "./Pages/Add"
import View from "./Pages/View"
import Edit from "./Pages/Edit"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Counter />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/view" element={<View />}></Route>
          <Route path="/edit/:editid" element={<Edit/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App