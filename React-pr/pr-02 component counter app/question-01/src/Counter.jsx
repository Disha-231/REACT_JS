

import { Component } from "react";
class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    Increment() {
        this.setState({
            count: this.state.count + 1
        })
    }
    Dicrement() {
        this.setState({
            count: this.state.count - 1
        })
    }
    Reset() {
        this.setState({
            count: 0
        })
    }
    // hello
    render() {
        return (
            <div align="center" className="Counting" >
                <h1>Counter App</h1>
              
                <button className="plus" onClick={() => this.Increment()} >+</button>
                <span>Count :- {this.state.count}</span>
                <button className="minus" onClick={() => this.Dicrement()}>-</button>
                <br></br>
                <button className="zero"  onClick={() => this.Reset()}>Reset</button>


            </div>

        )
    }
}
export default Counter;








