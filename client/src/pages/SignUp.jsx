import React from 'react'
import {Link} from 'react-router-dom';
export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" className='rounded-lg p-3 border' placeholder='Username' id = 'username' />
        <input type="email" className='rounded-lg p-3 border' placeholder='Email' id = 'email' />
        <input type="password" className='rounded-lg p-3 border' placeholder='Password' id = 'password'/>
        <button className='bg-slate-700 rounded-lg text-white p-3 uppercase hover:opacity-90 disabled:opacity-80'>Sign Up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to="/sign-in"> <span className='text-blue-500'>Log In </span></Link>
      </div>
    </div>
  )
}
