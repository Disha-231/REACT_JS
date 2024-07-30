import React, { useEffect, useState } from 'react'



const Crud = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    let data = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
    const [record, setRecord] = useState(data);
    const [single, setSingle] = useState("");
    const [editid, setEditid] = useState("");
    const [mdelete, setMdelete] = useState([]);
    const [mstatus, setMstatus] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();


        let obj = {
            id: Math.floor(Math.random() * 1000), name, phone, status: "Deactive"
        }

        if (!name || !phone) {
            alert("Please fill all the fields");
            return false
        }


        if (editid) {
            let newRecord = [...record];
            let upD = newRecord.map((val) => {
                if (val.id == editid) {
                    return {
                        ...val,
                        name: name,
                        phone: phone,
                    }
                } return val
            })
            setRecord(upD);
            localStorage.setItem('users', JSON.stringify(upD))
            setEditid(upD)
            setSingle("")
        }
        else {

            let newfild = [...record, obj];
            localStorage.setItem('users', JSON.stringify(newfild));
            setRecord(newfild)

            alert("Record  Add")
        };
        setName("");
        setPhone("");
    }

    const deleteUser = (id) => {
        let d = record.filter(val => val.id != id);
        localStorage.setItem('users', JSON.stringify(d));
        setRecord(d)
        alert("Delete")
    }

    const handleStatus = (id, status) => {
        if (status === "Deactive") {
            let upstatus = record.map((val) => {
                if (val.id === id) {
                    val.status = "Active";
                }
                return val;
            })
            localStorage.setItem('users', JSON.stringify(upstatus));
            setRecord(upstatus);
            alert("Status change")
        } else {
            let upstutas = record.map((val) => {
                if (val.id === id) {
                    val.status = "Deactive";
                }
                return val;
            })
            localStorage.setItem("users", JSON, stringify(upstutas));
            setRecord(upstutas);
            alert("Status change")
        }
    }

    const editUser = (id) => {
        console.log(id);
        const s = record.find(val => val.id == id);
        console.log(s);
        setEditid(s.id)
        setSingle(s)
    }

    useEffect(() => {
        setName(single.name)
        setPhone(single.phone)
    }, [single])

    const handlechangedelete = (id, checked) => {
        let all = [...mdelete];
        if (checked) {
            all.push(id)
        } else {
            all = all.filter(val => val != id)
        }
        setMdelete(all)
    }
    const multipleDelete = () => {
        if (mdelete.length > 0) {
            let d = record.filter(val => !mdelete.includes(val.id));
            localStorage.setItem("users", JSON.stringify(d));
            setRecord(d)
        } else {
            alert("Select at least one user")
            return false
        }
    }

    const handlestatuschange = (id, checked) => {
        let all = [...mstatus];
        if (checked) {
            all.push(id)
        } else {
            all = all.filter(val => val != id)
        }
        setMstatus(all)
    }

    const multiplestatusupdate = () => {
        let updateStatus = record.map((val) => {
            if (mstatus.includes(val.id)) {
                if (val.status === "active") {
                    val.status = "deactive"
                } else {
                    val.status = "active"
                }
            }
            return val;

        })
        localStorage.setItem('users', JSON.stringify(updateStatus));
        alert("status update")
        setRecord(updateStatus)
        setMstatus([])
    }

    return (
        <>
            <div align="center">
                <p>Crud operation with localStorage and multiple edit and delete</p>
                <h1>Add User</h1>
                <form onSubmit={handleSubmit}>
                    Name : &nbsp;
                    <input
                        type='text'
                        onChange={(e) => setName(e.target.value)}
                        value={name || " "}
                    />
                    <br></br><br></br>
                    Contact:&nbsp;
                    <input
                        type='text'
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone || " "}
                    />
                    <br></br><br></br>
                    {editid ? (
                        <input type='Submit' value="Edit"
                            style={{ color: "green", fontWeight: "900", background: "transparent", border: "none", fontSize: "18px" }} />
                    ) : (
                        <input type='Submit'
                            style={{ color: "green", fontWeight: "900", background: "transparent", border: "none", fontSize: "18px" }} />
                    )}
                </form>
            </div>
            <br></br>
            <div className='table'>
                <table align="center" border={2} cellPadding={3} cellSpacing={3}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Ststus</th>
                            <th>Action</th>
                            <th>
                                <button onClick={() => multipleDelete()}
                                    style={{ fontWeight: "900", background: "transparent", border: "none", fontSize: "12px" }}
                                >Multiple-Delete</button>
                            </th>
                            <th>
                                <button onClick={() => multiplestatusupdate()}
                                    style={{ fontWeight: "900", background: "transparent", border: "none", fontSize: "12px" }}>Multiple-Edit-Status</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            record.map((val) => {

                                const { id, name, phone, status } = val;
                                return (
                                    <tr key={id} >
                                        <td >{id}</td>
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
                                            <button onClick={() => editUser(id)}
                                                style={{ color: "#007bff", fontWeight: "900", background: "transparent", border: "none", fontSize: "12px" }}
                                            >EDIT</button>
                                        </td>
                                        <td>
                                            <input type="checkbox" onChange={(e) => handlechangedelete(id, e.target.checked)}
                                                style={{ width: "100%" }} />
                                        </td>
                                        <td>
                                            <input type="checkbox"
                                                checked={mstatus.includes(val.id)}
                                                onChange={(e) => handlestatuschange(id, e.target.checked)}
                                                style={{ width: "100%" }}
                                            />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Crud