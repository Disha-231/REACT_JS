import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Delete_user } from '../Action/CrudAction'

const View = () => {
    let navigate = useNavigate();
    let record = useSelector(state => state.crud.users);

    let dispatch = useDispatch();
    return (
        <div align="center">
            <div className='container'>
                <div className='row'>
                    <h2>View Data</h2>
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th scope="col">SRNO</th>
                                <th scope="col">Name</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                record.map((val, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{++index}</td>
                                            <td>{val.name}</td>
                                            <td>{val.phone}</td>
                                            <td>
                                                <button onClick={() => dispatch(Delete_user(val.id))}
                                                    className='btn btn-danger'
                                                    style={{
                                                        border: "none", color: "#fff",
                                                        borderRadius: "5px",
                                                        fontWeight: "500",
                                                        width: "80px",
                                                        backgroundColor: "red"
                                                    }}
                                                >DELETE</button>
                                                &nbsp;&nbsp;&nbsp;
                                                <Link to={`/edit/${val.id}`}>
                                                    <button className='btn btn-primary'
                                                        style={{
                                                            border: "none",
                                                            color: "#fff",
                                                            borderRadius: "5px",
                                                            fontWeight: "500",
                                                            width: "80px",


                                                        }}
                                                    >Edit</button>

                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <Link to={'/add'}>Add Data</Link>
                </div>
            </div>

        </div>
    )
}

export default View
