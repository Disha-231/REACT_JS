import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Add_user } from '../Action/CrudAction'

const Add = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id: Math.floor(Math.random() * 10000),
            name: name,
            phone: phone
        }


        dispatch(Add_user(obj))
        alert("record add")
        setName("")
        setPhone("")
    }

    return (
        <div align="center">
            <div className='container'>
                <div className='row'>
                    <form onSubmit={handleSubmit}>
                        <br></br>
                        Name : &nbsp;
                        <input type='text'
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />
                        <br></br> <br></br>
                        Phone : &nbsp;
                        <input type='text'
                            onChange={e => setPhone(e.target.value)}
                            value={phone}
                        />
                        <br></br><br></br>
                        <input type='submit'
                            style={{
                                border: "none", color: "#fff",
                                borderRadius: "5px",
                                fontWeight: "700",
                                letterSpacing: "2px",
                                width: "120px"
                            }}
                            className='bg-success'
                        ></input>
                        <br></br><br></br>
                    </form>

                    <Link to={'/view'}>View Data</Link>
                </div>
            </div>
        </div>
    )
}

export default Add
