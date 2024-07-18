

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_USER } from '../Redux/CrudAction/UserAction'
import { Link } from 'react-router-dom'

const Add = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const handlesubmit = (e) => {
        e.preventDefault();
        let obj = { name, phone }
        dispatch(ADD_USER(obj))
        setName('')
        setPhone("")
    }
    return (
        <div align="center">
            <h3>Crud Using Thunk ADD AND DELETE</h3><br />
            <form onSubmit={handlesubmit}>
                <label>Enter Name:</label> &nbsp;&nbsp;&nbsp;
                <input type="text"
                    onChange={(e) => setName(e.target.value)} value={name}
                    placeholder='Enter Your Name...!'
                    id="name" name="name" />
                <br /><br />
                <label>Enter Phone:</label> &nbsp;&nbsp;&nbsp;
                <input type="text"
                    onChange={(e) => setPhone(e.target.value)} value={phone}
                    placeholder='Enter Your Phone...!'
                    id="phone" name="phone" />
                <br /><br />
                <button type="submit" className='btn btn-success'>Add</button><br></br><br></br>
                <Link to={'/View'}>View</Link>
            </form>

        </div>
    )
}

export default Add


