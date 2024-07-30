import React from 'react'
import Adduser from './pages/Adduser'
import Viewuser from './pages/Viewuser'
import { useState } from 'react'
import "./Style.css"

function App() {
  const [alldata, setAlldata] = useState([])
  const [single, setsingle] = useState("")
  const [editid, setEditid] = useState("")

  const addUser = (data) => {
    setAlldata([...alldata, data]);
    alert("Your Record Add Successfully...!")
  }

  const deleteUser = (id) => {
    setAlldata(alldata.filter((val) => val.id != id))
    alert("Your Record Delete Successfully...!")
  }

  const editUser = (id) => {
    setsingle(alldata.find(val => val.id === id))
    setEditid(id)
  }

  const updateUser = (data) => {
    let up = alldata.map((val) => {
      if (val.id == editid) {
        val.name = data.name,
          val.phone = data.phone
      }
      return val;
    })
    setAlldata(up)
    alert("Your Record Update Successfully...!")
    setEditid("")
  }
  return (
    <>
      <Adduser
        addUser={addUser}
        single={single}
        updateUser={updateUser}
        editid={editid}
      />
      <Viewuser

        Viewrecord={alldata}
        deleteUser={deleteUser}
        editUser={editUser}
      />
    </>
  )
}

export default App
