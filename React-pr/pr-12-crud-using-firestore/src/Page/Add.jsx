import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddUser } from '../Redux/action/UserAction';
import { Link } from 'react-router-dom';

const Add = () => {

    const dispatch = useDispatch();
    const [name, setname] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id: Date.now(),
            name: name,
            phone: phone,
        }
        dispatch(AddUser(obj));
        setname("");
        setPhone("");
        
    }

    return (
        <div >
            <div className="conainer my-5">
                <div className="d-flex flex-wrap justify-content-center">
                    <div className="shadow-lg shadow pt-2 pb-3 px-3">
                        <h2 className='text-secondary'>Title</h2>
                        <div className="d-flex flex-wrap" align="center">

                            <div className="px-3 pt-5 pb-3">
                                <h5 className='fw-bold mb-4'>
                                    Fill The Information...!
                                </h5>
                                <form onSubmit={handleSubmit}>
                                        <div className="name p-2">
                                            <h6>Name</h6>
                                            <input type="text" className='border border-1 border-secondary p-2' onChange={(e) => setname(e.target.value)} value={name} />
                                        </div>
                                        
                                    
                                      
                                        <div className="name p-2">
                                            <h6>Phone Number</h6>
                                            <input type="text" className='border border-1 border-secondary p-2' onChange={(e) => setPhone(e.target.value)} value={phone} />
                                        </div>
                                   
                                
                                    <div className='p-2'>
                                        <button className='border w-100 bg-success py-2 text-white'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                <br></br>
              <center>  <Link to={"/view"}>View Your Data</Link></center>

            </div>
        </div>
    )
}

export default Add