

// import React, { useState } from "react";
// import ComponentA from './Components/ComponentA'
// import ComponentB from './Components/ComponentB'

// function App() {
//   const [no, setNo] = useState(false)
//   return (
//     <>
//       {
//         no?(
//           <ComponentA/>
//         ):(
//           <ComponentB/>
//         )
//       }
//       <button onClick={()=>setNo(!no)}>Click</button>
//     </>
//   );
// }

// export default App;



import React, { useState } from "react";
import { Dashboard, Login } from "./Components/Main";

function App() {

  const [login, setLogin] = useState(false)

  const signIn = () => {
    setLogin(true)
  }

  const signOut = () => {
    setLogin(false)
  }

  return (
    <>
      {
        login?(
          <>
            <Dashboard/>
            <button onClick={ () => signOut()}>Log Out</button>
          </>
        ):(
          <>
          <Login/>
          <button onClick={ () => signIn()}>Log In</button>
        </>
        )
      }
    </>
  );
}

export default App;






