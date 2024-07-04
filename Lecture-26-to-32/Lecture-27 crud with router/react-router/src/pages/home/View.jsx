import React, { useState } from "react";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";

const View = () => {
  const navigate = useNavigate();
  let data = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : []
  const [record,setRecord] = useState(data)

  const deleteUser = (id) => {
    let d = record.filter((val) => val.id != id);
    localStorage.setItem('users',JSON.stringify(d));
    setRecord(d)
    alert("record delete")
  }

  return (
    <>
      <Header />
      <div className="container mt-5 shadow p-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="d-flex justify-content-end">
              <Link to={`/add`}>
                <button className="btn btn-success btn-sm mb-2">Add</button>
              </Link>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Course</th>
                  <th scope="col">Join Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {record.map((val) => {
                  return (
                    <tr>
                      <td>{val.id}</td>
                      <td>{val.name}</td>
                      <td>{val.email}</td>
                      <td>{val.password}</td>
                      <td>{val.gender}</td>
                      <td>{val.course.join(" , ")}</td>
                      <td>{val.date}</td>
                      <td>
                        <button
                          onClick={() => deleteUser(val.id)}
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </button>
                        <button
                          onClick={ () => navigate(`/edit`,{state:val}) }
                          className="btn btn-primary btn-sm"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
