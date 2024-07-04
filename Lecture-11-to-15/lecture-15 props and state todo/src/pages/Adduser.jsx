import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


const Adduser = ({ addUser, single, editid, updateUser }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("")

    useEffect(() => {
        setName(single.name);
        setPhone(single.phone)
    }, [single])

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id: Date.now(),
            name: name,
            phone: phone
        };
        if (editid) {
            updateUser(obj);
        } else {
            addUser(obj);
        }

        setName("")
        setPhone("")
    }

    return (
        <div align="center" className='todo'>
            <h1>TODO APP USING PROPS AND STATE</h1>
            <br></br> <br></br>
            <form onSubmit={handleSubmit}>
                Name:&nbsp;&nbsp;  {""} 
                <input type="text" onChange={(e) => setName(e.target.value)} value={name || ""} placeholder='Enter Your Name..!'/>
                <br></br>
                <br></br>
                Contact :&nbsp;&nbsp; {""}
                <input type='text' onChange={(e) => setPhone(e.target.value)} value={phone || ""} placeholder='Enter Your contact-number..!'/>
                <br></br>  <br></br>
                <button className='submit'>Submit</button>
                <br></br> <br></br>
            </form>
        </div>
    )
}

export default Adduser
