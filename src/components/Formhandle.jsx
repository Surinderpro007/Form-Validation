import React, { useState } from 'react'
import Eye from '../assets/Eye.svg'
import toast, { Toaster } from 'react-hot-toast';

const Formhandle = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault()

        if(name === '') {
            setError('Please fill in all fields')
            toast.error('Please fill in all fields');
            // let x = document.getElementById("name");
            // x.style.border="1px solid #ff00008a"
            // x.style.background="ff000014"
            return
        }
       

        if(password.length < 8){
            setError('Password must be at least 8 characters long')
            toast.error('Password must be at least 8 characters long');
            let x = document.getElementById("password");
            x.style.border="1px solid #ff00008a"
            x.style.background="ff000014"

            return;
        }
        if(password !== confirmPassword){
            setError('Passwords do not match')
            toast.error('Passwords do not match');
            return;
        }
        if(email.includes('@') === false){
            setError('Invalid email')
            toast.error('Invalid email address');
            return;
        }
        if(!/[!@#$%^&*()<>,."]/.test(password)){
            setError(' Password must contain at least one special character')
            toast.error('Password must contain at least one special character');
            return;
        }
        if(!/[A-Z]/.test(password)){
            setError('Password must contain at least one Upperrcase letter')
            toast.error('Password must contain at least one uppercase letter');
            return;
        }
        if(!/[1-9]/.test(password)){
            setError('Password must contain at least one number')
            toast.error('Password must contain at least one number');
            return;
        }
        console.log({name,email,password})
        // toast.success('Form submitted successfully!');
        toast.success('Form Submit Successfully');




        setName("")
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setError("");

    }

    const handleSeePassword=()=>{
        let passwordInput = document.getElementById('password');
      
        if(passwordInput.type === 'password'){
            passwordInput.type = 'text';
        }
        else{
           passwordInput.type = 'password';
        }
    }

    return (
        <>
            <Toaster position="top-right" />
            <div className="w-[1240px] flex items-center justify-center">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full border-[1.2px] border-grey">
                    <div className="flex justify-center mb-6">

                    </div>
                    <h2 className="text-2xl font-bold text-center text-gray-900">Sign in to your account</h2>
                    <p className="text-sm text-center text-gray-600 mt-1">
                        Or{' '}
                        <a href="#" className="text-indigo-500 hover:underline">
                            start your 14-day free trial
                        </a>
                    </p>
                    <form className="mt-6" onSubmit={(e)=>handleSubmit(e)}>
                        <div className="mb-4">
                            <label htmlFor="first-name" className="text-start block text-sm font-medium text-gray-700">
                                First name
                            </label>
                            <input type="text" id="name" 
                                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Enter your first name" onChange={(e)=> setName(e.target.value)} value={name} 
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="text-start block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input type="email" id="email"
                                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Enter your email"
                                onChange={(e)=> setEmail(e.target.value)} value={email}
                            />
                        </div>
                        <div className="mb-4 relative">
    <label
        htmlFor="password"
        className="text-start block text-sm font-medium text-gray-700"
    >
        Password
    </label>
    <div className="mt-1 relative">
        <input
            type="password"
            id="password"
            className="block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-10"
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
        />
       <span
    onClick={handleSeePassword}
    className="absolute inset-y-0 right-2 flex items-center cursor-pointer"
    role="button"
    aria-label="Toggle password visibility"
>
    <img src={Eye} alt="Toggle visibility" className="w-5 h-5" />
</span>

    </div>
</div>

                        <div className="mb-4">
                            <label htmlFor="email" className="text-start block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <input type="password" id="confirmPassword"
                                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Enter confirm Password"
                               onChange={(e)=> setConfirmPassword(e.target.value)} value={confirmPassword}
                            />
                        </div>

                        <div className="flex items-center justify-between mb-4">
                            <div>
                            Already have an account? 
                                <a
                                    href="#"
                                    className="text-sm text-indigo-500 hover:underline"
                                >
                                    &nbsp;Sign In
                                </a>
                            </div>
                        </div>
                        {error && (<div className="text-red-500 mb-2">
                           <p>{error}</p>
                            </div>)}
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >Login
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Formhandle
