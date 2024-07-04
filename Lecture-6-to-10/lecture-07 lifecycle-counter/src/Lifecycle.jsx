import { Component } from "react";
class Lifecycle extends Component {
    constructor() {
        super();
        this.state = {
            cnt: 0
        }
    }
    plus() {
        this.setState({
            cnt: this.state.cnt + 1
        })
    }
    componentDidMount() {
        const getproduct = async () => {
            fetch("https://dummyjson.com/products", {
                method: "GET"
            })
                .then(res => res.json())
                .then((result) => {
                    console.log(result);
                })

        }
        getproduct()
    }
    componentDidUpdate() {
        console.log(`Component update:- ${this.state.cnt}`);
    }


    render() {
        console.log("render");
        return (
            <div align="center">
                <h1>Counter App</h1>
                <h2>counter :- {this.state.cnt}</h2>
                <button onClick={() => this.plus()}>+</button>
            </div>
        )
    }
}
export default Lifecycle;





















