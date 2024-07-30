
import Record from "./Record";

function App() {

  let todo =[
    {id:1,task : "Dancing"},
    {id:2,task : "watching"},
    {id:3,task : "cooking"},    
  ];
  let user =[
    {id:1,name:"disha",phone:12345},
    {id:2,name:"krimisha",phone:34115},
    {id:3,name:"khushi",phone:1231145},

  ];
  return (
      <div>
            <Record   todoList ={todo} userList = {user}/>
      </div>
  );
}

export default App;