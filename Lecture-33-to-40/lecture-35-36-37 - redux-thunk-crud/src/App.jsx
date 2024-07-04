import { BrowserRouter, Route, Routes } from "react-router-dom"
import Add from "./Page/Add"
import View from "./Page/View"

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Add/>}></Route>
          <Route path="/view" element={<View />}></Route>
      </Routes>
      </BrowserRouter>
      {/* http://localhost:8000/users */}
    </>
  )
}

export default App
