
import React, { useState } from 'react'

const Form = () => {
    const [input, setInput] = useState([
        { id: "", name: "", contact: "" },

    ])

    const addMore = () => {

        let newrecord = {
            id: Date.now(),
            name: "",
            contact: ""
        }

        setInput([...input, newrecord])
        alert("Added Your Record ")
    }

    const remove = (id) => {
        setInput(input.filter(val => val.id != id))
        alert("remove Your Record")
    }
    return (
        <div align="center">
            <h1 className='title'>~~~~~~~~~~~ Dynamic - Form ~~~~~~~~~~~</h1>
            {
                input.map((val, index) => {
                    return (
                        <form key={val.id}>
                            < br ></br>
                            ID:- &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <input type="text" placeholder='Enter Your id..!' ></input>&nbsp; &nbsp; <br></br>
                            NAME:-&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; <input type="text" placeholder='Enter Your Name..!' ></input>&nbsp; &nbsp; <br></br>
                            CONTACT:- &nbsp; <input type="text" placeholder='Enter Your Contact..!' ></input>&nbsp; &nbsp; <br></br>
                            {
                                index === 0 ? " " : <button className="delete" type='button' onClick={() =>
                                    remove(val.id)}>DELETE</button>
                            }
                        </form>
                    )
                }

                )}
            <br></br>
            <button className="add" onClick={addMore}>Add More</button>
        </div >
    )
}

export default Form
