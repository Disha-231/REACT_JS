import { BrowserRouter, Route, Routes } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'
import Add from "./Page/Add"
import View from "./Page/View"
import Edit from "./Page/Edit"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Add />} />
        <Route path="view" element={<View />} />
        <Route path="Edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App