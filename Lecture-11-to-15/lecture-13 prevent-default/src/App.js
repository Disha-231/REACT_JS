import { useState } from "react";


function App() {
  const [name, setName] = useState("")
  const submit = (event) => {
    event.preventDefault()
    setName("")
    alert(name)
  }
  return (
    <>
      <form onSubmit={submit}>
        Name:- <input type="text" onChange={(event) => setName(event.target.value)} value={name}></input>
        <button>add</button>
      </form>
    </>
  );
}

export default App;