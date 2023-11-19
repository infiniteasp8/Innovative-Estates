import React from 'react';
import {FaSearch, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-blue-600'>∞</span>
        <span className='text-slate-600'>Estates</span>
        </h1>
        </Link>
        <form className='bg-blue-200 p-1 rounded-lg flex items-center'>
          <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
          <FaSearch className='text-slate-600 pl-0.5 '/>
        </form>
        <ul className='flex gap-6 items-center'>
        <Link to='/'>
          <li className='hidden sm:inline hover:underline'>Home</li>
        </Link>

        <Link to='/about'>
          <li className='hidden sm:inline hover:underline'>About</li>
        </Link>
        <Link to='/sign-in'>
          <li className='hover:outline-dotted'>
            <FaUser className='rounded'></FaUser>
          </li>
        </Link>
        </ul>
      </div>
    </header>
    )
}
