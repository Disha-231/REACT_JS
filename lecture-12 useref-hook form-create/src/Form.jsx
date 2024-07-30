import React, { useRef, useState } from "react";

const Form = () => {
    const userName = useRef("")
    const password = useRef("")
    const [record, setRecord] = useState([])
    const Submit = (events) => {
        events.preventDefault();
        let name = userName.current.value;
        let pass = password.current.value;
        let obj = {
            id: Math.floor(Math.random() * 10000),
            name, pass
        }

        let old = [...record, obj]
        setRecord(old)
        userName.current.value = ""
        password.current.value = ""
    }
    return (
        <div align="center">
            <h1>Form</h1>
            <form onSubmit={Submit}>
                Name: <input type="text" ref={userName}></input>

                Password: <input type="text" ref={password}></input>

                <input type="submit"></input>
            </form>


            <h1>View:---</h1>
            <table border="1">
                <thead>
                    <tr>
                        <td>SRNO</td>
                        <td>NAME</td>
                        <td>PASSWORD</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        record.map((item) => {
                            const { id, name, pass } = item
                            return (
                                <tr>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{pass}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Form;


