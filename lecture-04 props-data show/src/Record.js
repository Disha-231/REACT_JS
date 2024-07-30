import { Component } from "react";
class Record extends Component{
    constructor(props)
    {
        super()
        this.state = {
            todo : props.todoList,
            userList : props.userList
        }
    }
    render(){
        return(
            <div align ="center">
                <h1>TODO LIST</h1>
                {
                    this.state.todo.map((item) =>{
                        return(
                            <div key = {item.id}>
                                <h2>{`Id:-${item.id}`}</h2>
                                <h2>{`Name:-${item.task}`}</h2>
                            </div>
                        )
                    })
                }
                <h1>USER LIST</h1>
                {
                    this.state.userList.map((item) =>{
                        return(
                            <div>
                                  <h2>{`Id:-${item.id}`}</h2>
                                  <h2>{`name:-${item.name}`}</h2>
                                  <h2>{`phone:-${item.phone}`}</h2>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default Record;
