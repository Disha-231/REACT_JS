import React, { useState } from "react";

const Todo = () => {
    const [task, setTask] = useState("")
    const [alltask, setAlltask] = useState([])
    const handlesubmit = (event) => {
        event.preventDefault()
        if (!task) {
            alert("blank")
            return false
        }
        let dup = alltask.find(item => item.task === task)
        if (dup) {
            alert("already")
            return false
        }
        let obj = {
            userid: Date.now(),
            task,
            stutas: "pending"
        }
        let newrecord = [...alltask, obj]
        setAlltask(newrecord)
        alert("task added")
        setTask(" ")
    }
    const completeTodo = (id) => {
        let updatestutas = alltask.map((com) => {
            if (com.userid == id) {
                com.stutas = "Completed"
            }
            return com;
        })
        setAlltask(updatestutas)
        alert("stutas successfully changedd")
    }
    const deleteTodo = (id) => {
        setAlltask(alltask.filter(item => item.userid != id))
        alert("Task deleted")
    }


    return (
        <div align="center">
            <h1>Simple To do</h1><br></br><br></br>
            <form onSubmit={handlesubmit}>
                Task &nbsp;:{" "}&nbsp;
                <input type="text"
                    placeholder="  &nbsp;Enter Your Task...!"
                    onChange={(e) => setTask(e.target.value)}
                    value={task}>
                </input>
                <br></br>
                <br></br>
                <button type="submit" className="bg-success" style={{ border: "none", color: "white", fontWeight: "900" }}>Add Task</button>

            </form>
            <br></br><br></br>
            <h2>view Records</h2>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">User_Id</th>
                        <th scope="col">Task</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alltask.map((t) => {
                            const { userid, task, stutas } = t;
                            return (
                                <tr key={userid}>
                                    <td>{userid}</td>
                                    <td>  {task} </td>
                                    <td>{stutas}</td>
                                    <td>
                                        <button
                                            disabled={stutas == "completed"}
                                            onClick={() => completeTodo(userid)}
                                            style={{
                                                border: "none",
                                                color: "white",
                                                fontWeight: 600,
                                                backgroundColor: " #2F539B",
                                                borderRadius: "5px"


                                            }}

                                        >
                                            COMPLETE
                                        </button>&nbsp; &nbsp;&nbsp;
                                        <button onClick={() => deleteTodo(userid)}
                                            style={{
                                                border: "none",
                                                color: "white",
                                                fontWeight: 600,
                                                backgroundColor: " maroon",
                                                borderRadius: "5px"
                                            }}

                                        >DELETE</button>
                                    </td>


                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Todo;

