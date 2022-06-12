import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {
  const [nav, setNav] = useState(false)
  // create a function for navBar...
  const handleNavbar = () =>{
    setNav(!nav)
  }
  return (
    <div className='text-white flex items-center justify-between h-24 max-w-[1240px] mx-auto  px-4'>
        <h1 className='w-full font-bold text-green-500 text-3xl '>Data A.</h1>

        <ul className='hidden md:flex'>
            <li className='p-4 cursor-pointer'>Home</li>
            <li className='p-4 cursor-pointer'>Company</li>
            <li className='p-4 cursor-pointer'>Resources</li>
            <li className='p-4 cursor-pointer'>About</li>
            <li className='p-4 cursor-pointer'>Contact</li>
        </ul>

        <div onClick={handleNavbar} className='block md:hidden'>
          {
            !nav ? <AiOutlineMenu className='cursor-pointer' size={30}/> : <AiOutlineClose className='cursor-pointer' size={30}/>
          }
        </div>

        <div className={nav ? 'fixed left-0 top-0 h-full w-[40%] border-r border-r-gray-700 bg-slate-700 ease-in-out duration-700' : 'fixed left-[-100%]'}>
        <ul className='uppercase p-4'>
            <li className='p-4 cursor-pointer border-b border-b-gray-500'>Home</li>
            <li className='p-4 cursor-pointer border-b border-b-gray-500'>Company</li>
            <li className='p-4 cursor-pointer border-b border-b-gray-500'>Resources</li>
            <li className='p-4 cursor-pointer border-b border-b-gray-500'>About</li>
            <li className='p-4 cursor-pointer'>Contact</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar