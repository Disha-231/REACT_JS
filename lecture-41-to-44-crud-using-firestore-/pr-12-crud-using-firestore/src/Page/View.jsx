import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { DeleteUser, ViewUser } from '../Redux/action/UserAction'

const View = () => {
    const navigate = useNavigate()
    const Delete_user = (userId) => {
        dispatch(DeleteUser(userId))
        alert("Delete Successfully")
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(ViewUser())
    }, [])
    const users = useSelector(state => state.form.userList)
    console.log(users)
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <center>
                            <div className="title">
                                <h3>Your Data Is Here..!</h3>
                            </div>
                            <div className="data">
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
                                            users && Object.entries(users).map(([key, value]) => {
                                                return (
                                                    <tr key={key}>
                                                        <td>{key}</td>
                                                        <td>{value.name}</td>
                                                        <td>{value.phone}</td>
                                                        <td>
                                                            <button onClick={() => Delete_user(key)}
                                                                className="btn btn-danger">Delete</button>


                                                            &nbsp; &nbsp; &nbsp;
                                                            <button
                                                                onClick={() => navigate('/Edit', { state: [key, value] })}
                                                                className="btn btn-primary">
                                                                Edit</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                            <Link to={"/"}>Add More Data ..!</Link>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View
