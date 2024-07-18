import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, googleAuthProvider } from '../firebaseconfig'
import { useNavigate } from 'react-router-dom'

// ----------------- ICON OF GOOGLE -----------------------
import { IoLogoGoogleplus } from "react-icons/io";

const Login = () => {
    const navigate = useNavigate()

    const handlelogin = async () => {
        try {
            let login = await signInWithPopup(auth, googleAuthProvider);
            navigate('/Add');
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    return (
        <div className='w-50 mx-auto p-5 my-5 text-center text-white'>
            <h1>Google Login</h1>
            <button onClick={() => handlelogin()} className='btn bg-danger text-white mt-3 pb-3' ><span className='text-white fs-4 me-2 '><IoLogoGoogleplus /></span>  Login With Google</button>
        </div>
    )
}

export default Login
