import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_USER, VIEW_USER } from '../Redux/CrudAction/UserAction'
import { Link } from 'react-router-dom'

const View = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(VIEW_USER())
    }, [])
    const users = useSelector(state => state.users.userList)
    console.log(users);


    const deleteuser = (id) => {
        dispatch(DELETE_USER(id))
        alert("delete")
    }



    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((user, i) => {
                            return (
                                <tr key={i}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        <button onClick={() => deleteuser(user.id)}>DELETE</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to={'/'}>Add</Link>
        </>
    )
}

export default View