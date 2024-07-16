import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ViewUser } from '../Redux/action/UserAction'

const View = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(ViewUser())
    }, [])
    const users = useSelector(state => state.user)
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
                                               users && Object.entries(users).map(([value, index]) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{++index}</td>
                                                            <td>{value.name}</td>
                                                            <td>{value.phone}</td>
                                                            <td>
                                                                <Link to={`/edit/${key}`}>
                                                                <button className="btn btn-primary">
                                                                    Edit</button>
                                                            </Link></td>
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
