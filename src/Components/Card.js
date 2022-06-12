import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'

const Card = () => {
  return (
    <section className='bg-white py-20 w-full'>
        {/* main section */}
        <main className='lg:w-[1100px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 px-8 py-8 gap-20'>

            {/* image section */}
            <div className='border rounded-lg border-gray-100 shadow-lg w-80 mx-auto hover:scale-105 duration-500 cursor-pointer'>
                <img src={single} className='w-20 mx-auto mt-[-45px]' alt="" /> <br />

            {/* tittle section */}
            <h1 className='text-center text-black font-bold text-2xl pb-4'>Signle User</h1>

            <h1 className='text-center font-bold text-2xl text-black'>$ 80</h1><br />

            <div className='font-semibold px-6 text-black'>
                <p className='border-b py-2 text-center'>500 GB Storage</p>
                <p className='border-b py-2 text-center'>1 Granted User</p>
                <p className='border-b py-2 text-center'>Send up to 2 GB</p>
            </div>

            <div className='text-center mt-6'>
            <button className='w-28 h-10 rounded-lg bg-green-300 font-semibold text-black shadow mb-4'>Start Triel</button>
            </div>
               
            </div>
            {/* ---------------------- */}
            {/* image section */}
            <div className='border bg-gray-400 rounded-lg border-gray-100 shadow-lg w-80 mx-auto hover:scale-105 duration-500 cursor-pointer'>
                <img src={double} className='w-20 mx-auto mt-[-45px]' alt="" /> <br />

            {/* tittle section */}
            <h1 className='text-center text-black font-bold text-2xl pb-4'>Double User</h1>

            <h1 className='text-center font-bold text-2xl text-black'>$ 150</h1><br />

            <div className='font-semibold px-6 text-black'>
                <p className='border-b py-2 text-center'>500 GB Storage</p>
                <p className='border-b py-2 text-center'>1 Granted User</p>
                <p className='border-b py-2 text-center'>Send up to 2 GB</p>
            </div>

            <div className='text-center mt-6'>
            <button className='w-28 h-10 rounded-lg bg-black font-semibold text-white shadow mb-4'>Start Triel</button>
            </div>
               
            </div>

             
            {/* -------------------------------- */}
            {/* image section */}
            <div className='border rounded-lg border-gray-100 shadow-lg w-80 mx-auto hover:scale-105 duration-500 cursor-pointer'>
                <img src={triple} className='w-20 mx-auto mt-[-45px]' alt="" /> <br />

            {/* tittle section */}
            <h1 className='text-center text-black font-bold text-2xl pb-4'>Triple User</h1>

            <h1 className='text-center font-bold text-2xl text-black'>$ 200</h1><br />

            <div className='font-semibold px-6 text-black'>
                <p className='border-b py-2 text-center'>500 GB Storage</p>
                <p className='border-b py-2 text-center'>1 Granted User</p>
                <p className='border-b py-2 text-center'>Send up to 2 GB</p>
            </div>

            <div className='text-center mt-6'>
            <button className='w-28 h-10 rounded-lg bg-green-300 font-semibold text-black shadow mb-4'>Start Triel</button>
            </div>
               
            </div>
             
           
        </main>
    </section>
  )
}

export default Card