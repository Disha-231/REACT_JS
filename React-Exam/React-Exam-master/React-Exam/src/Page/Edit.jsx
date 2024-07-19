import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddUser } from '../Redux/action/UserAction';
import { Link, useLocation } from 'react-router-dom';

const Edit = () => {

    const location = useLocation()
    console.log(location);

    console.log(location.state);
    const dispatch = useDispatch();
    const [name, setname] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [city, setCity] = useState("")
    const [salary, setSalary] = useState("")
    const [degignation, setDegignation] = useState("")
    const [status, setStatus] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id: location.state[0],
            name: name,
            email: email,
            password: password,
            city: city,
            salary: salary,
            degignation: degignation,
            status: status


        }
        dispatch(AddUser(obj));
        setname("");
        setEmail("");
        setPassword("");
        setCity("");
        setSalary("");
        setDegignation("");
        setStatus("");

    }
    useEffect(() => {
        setname(location?.state[1]?.name);
        setEmail(location.state[1].email);
        setPassword(location.state[1].password);
        setCity(location.state[1].city);
        setSalary(location.state[1].salary);
        setDegignation(location.state[1].degignation);
        setStatus(location.state[1].status);
    }, [location.state])

    return (
        <div >
            <div className="conainer my-5">
                <div className="d-flex flex-wrap justify-content-center">
                    <div className="shadow-lg shadow pt-2 pb-3 px-3">
                        <h2 className='text-secondary'>Employee-Details...!</h2>
                        <div className="d-flex flex-wrap" align="center">

                            <div className="px-3 pt-5 pb-3">
                                <h5 className='fw-bold mb-4'>
                                    Fill The Employee Information...!
                                </h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="col-12 d-flex">
                                        <div className="col-6"> <div className="name p-2">
                                            <h6>Employee-Name</h6>
                                            <input type="text"
                                                placeholder='Enter Name..!'
                                                className='border border-1 border-secondary p-2'
                                                onChange={(e) => setname(e.target.value)}
                                                value={name} />
                                        </div>
                                        </div>

                                        <div className="col-6">

                                            <div className="name p-2">
                                                <h6>Employee-Email</h6>
                                                <input type="email"
                                                    placeholder='Enter Email..!'

                                                    className='border border-1 border-secondary p-2' onChange={(e) => setEmail(e.target.value)} value={email} />
                                            </div>
                                        </div>

                                    </div>


                                    <div className="col-12 d-flex">
                                        <div className="col-6"> <div className="name p-2">
                                            <h6>Employee-Email-Password</h6>
                                            <input type="password"
                                                placeholder='Enter Password..!'

                                                className='border border-1 border-secondary p-2' onChange={(e) => setPassword(e.target.value)} value={password} />
                                        </div>
                                        </div>

                                        <div className="col-6">

                                            <div className="name p-2">
                                                <h6>Employee-City</h6>
                                                <input type="text"
                                                    placeholder='Enter City..!'

                                                    className='border border-1 border-secondary p-2' onChange={(e) => setCity(e.target.value)} value={city} />
                                            </div>
                                        </div>

                                    </div>


                                    <div className="col-12 d-flex">
                                        <div className="col-6"> <div className="name p-2">
                                            <h6>Employee-Salary</h6>
                                            <input type="number"
                                                placeholder='Enter Salary..!'

                                                className='border border-1 border-secondary p-2' onChange={(e) => setSalary(e.target.value)} value={salary} />
                                        </div>
                                        </div>

                                        <div className="col-6">

                                            <div className="name p-2">
                                                <h6>Employee-Degignation </h6>
                                                <input type="text"
                                                    placeholder='Enter Degignation..!'

                                                    className='border border-1 border-secondary p-2' onChange={(e) => setDegignation(e.target.value)} value={degignation} />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-12">
                                        <div className="name p-2">

                                            <select onChange={(e) => setStatus(e.target.value)} value={status}>
                                                <option> Select Employee Status </option>
                                                <option value="Active">Active</option>
                                                <option value="Deactive">Deactive</option>

                                            </select>
                                        </div>
                                    </div>

                                    <div className='p-2'>
                                        <button className='border rounded-3 w-100 bg-dark py-2 text-white'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                <br></br>
                <center>  <Link to={"/view"}>View Your Employee Information</Link></center>

            </div>
        </div>
    )

}

export default Edit