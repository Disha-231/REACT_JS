import { BrowserRouter, Route, Routes } from "react-router-dom"
import Add from "./pages/Add"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Add/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App