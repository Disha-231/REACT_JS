import { Component } from "react";
class Counter extends Component{
    constructor(){
        super();
        this.state = {
            count:0
        }
    }
    Increment(){
        this.setState({
            count:this.state.count + 1
        })
    }
    Dicrement(){
        this.setState({
            count:this.state.count - 1
        })
    }

     render(){
        return(
          <div align="center" className="Counting"> 
            <h1>Counter App</h1>
            <h2>Count :- {this.state.count}</h2>
            <button onClick={()=>this.Increment()} >Increment</button><br></br><br></br>
            <button onClick={()=>this.Dicrement() }>Dicrement</button>
  
          </div>
           
        )
     }
    }
export default Counter;