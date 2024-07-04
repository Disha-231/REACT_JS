import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { EDIT_USER, UPDATE_USER } from '../Action/CrudAction'

const Edit = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    let single = useSelector(state => state.crud.single)
    // console.log(single);
    let editId = useParams();
    let dispatch = useDispatch();
    let navigate = useNavigate();


    useEffect(() => {
        setName(single?.name || "")
        setPhone(single?.phone || "")
    }, [single])


    useEffect(() => {
        if (editId) {
            dispatch(EDIT_USER(editId));
        }
    }, [editId])


    const handleSubmit = (e) => {
        e.preventDefault();

        let obj = {
            id: single?.id,
            name,
            phone,
        }
        dispatch(UPDATE_USER(obj));
        setName("")
        setPhone("")

        setTimeout(() => {
            navigate('/view');
        }, 1000)
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

export default Edit
