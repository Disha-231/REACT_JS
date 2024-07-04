
import React from 'react'

const View = ({ record, editData,deleteUser, handleStatus, multiplestatusupdate, handlechangestatus, handleAllDelete,
    handleCheckboxChange, multipleUpdateStatus
}) => {
    return (
        <div>
            <table className=' table'>
                <thead>
                    <tr className="table-header">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Action</th>
                        <th>
                            <button   onClick={handleAllDelete} className="delete-btn">Multiple-Delete</button>
                        </th>
                        <th>
                            <button   onClick={multiplestatusupdate} className="update-btn"> Multiple-Status-Update</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {record.map((item) => {
                        const { id, name, phone, status } = item;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{phone}</td>
                                <td>

                                    {
                                        status === "Deactive" ? (
                                            <button
                                                onClick={() => handleStatus(id, status)}
                                                style={{ color: "red", fontWeight: "800", background: "transparent", border: "none", fontSize: "12px", width: "100%" }}
                                            >
                                                {status}
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => handleStatus(id, status)}
                                                style={{ color: "green", fontWeight: "800", background: "transparent", border: "none", fontSize: "12px", width: "100%" }}
                                            >
                                                {status}
                                            </button>
                                        )
                                    }
                                </td>
                                <td>
                                    <button onClick={() => deleteUser(id)}
                                        style={{ color: "red", fontWeight: "900", background: "transparent", border: "none", fontSize: "12px" }}
                                    >DELETE</button>&nbsp;&nbsp;
                                    <button onClick={() => editData(id)}
                                        style={{ color: "#007bff", fontWeight: "900", background: "transparent", border: "none", fontSize: "12px" }}
                                    >EDIT</button>
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        onChange={(e) =>
                                            handleCheckboxChange(id, e.target.checked)
                                        }
                                    />
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={multipleUpdateStatus.includes(id)}
                                        onChange={(e) =>
                                            handlechangestatus(id, e.target.checked)
                                        }
                                    />
                                </td>
                            </tr>
                        );
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default View
