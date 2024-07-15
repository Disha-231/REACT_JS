import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddUser } from '../redux/action/studentAction';

const Add = () => {

    const dispatch = useDispatch();
    const [name, setname] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id: Date.now(),
            name: name,
            company: company,
            email: email,
            phone: phone,
            message: message
        }
        dispatch(AddUser(obj));
        setname("");
        setCompany("");
        setEmail("");
        setPhone("");
        setMessage("");
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
                                    <div className="d-flex mb-2">
                                        <div className="name p-2">
                                            <h6>Name</h6>
                                            <input type="text" className='border border-1 border-secondary p-2' onChange={(e) => setname(e.target.value)} value={name} />
                                        </div>
                                        <div className="name p-2">
                                            <h6>Company</h6>
                                            <input type="text" className='border border-1 border-secondary p-2' onChange={(e) => setCompany(e.target.value)} value={company} />
                                        </div>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <div className="name p-2">
                                            <h6>Email Address</h6>
                                            <input type="email" className='border border-1 border-secondary p-2' onChange={(e) => setEmail(e.target.value)} value={email} />
                                        </div>
                                        <div className="name p-2">
                                            <h6>Phone Number</h6>
                                            <input type="text" className='border border-1 border-secondary p-2' onChange={(e) => setPhone(e.target.value)} value={phone} />
                                        </div>
                                    </div>
                                    <div className='p-2'>
                                        <h6>Message</h6>
                                        <textarea className=' border border-1 border-secondary w-100' onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                                    </div>
                                    <div className='p-2'>
                                        <button className='border w-100 bg-success py-2 text-white'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add