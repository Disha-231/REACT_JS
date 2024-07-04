import React from 'react'

const Viewuser = ({ Viewrecord, deleteUser, editUser }) => {
    return (
        <div align="center" className='to-do'>
            <h1>View User</h1>
            <br></br> <br></br>
            <table border={1} cellPadding={10}
            cellSpacing={3}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Viewrecord.map((val) => {
                            return (
                                <tr key={val.id}>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.phone}</td>
                                    <td>
                                        <button
                                         onClick={() => editUser(val.id)}
                                         style={{border:"none",
                                            fontWeight:900,
                                            fontSize:"15px",
                                            color:"rgb(20, 120, 228)"
                                        }}
                                         
                                         >Edit</button>||
                                        <button
                                         onClick={() => deleteUser(val.id)}
                                         style={{border:"none",
                                            fontWeight:900,
                                            fontSize:"15px",
                                            color:"maroon"
                                        }}
                                         
                                         >DELETE</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Viewuser
