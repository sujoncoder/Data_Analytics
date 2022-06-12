import React from 'react'
import laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <section className='bg-white px-4 py-6 md:flex  items-center justify-center md:h-screen'>
      <div className='flex-1'>
        <img className='w-[390px] md:w-[500px]' src={laptop} alt="" />
      </div>

      <div className='flex-1'>
        <h2 className='uppercase font-bold text-green-300'>data analytics dashboard</h2>

        <h1 className='capitalize font-bold text-2xl'>manage data analytics centrally</h1><br />

        <p className='font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nemo quam facere cum ratione? Voluptatibus minus, voluptas laborum facere ex aliquid tempora neque ipsa, sed, soluta ratione ipsum! Facere, aliquid!</p>

        <button className='w-32 py-2 mt-4 rounded-lg bg-gray-400 font-semibold text-black border mx-auto'>Get Started</button>
      </div>
    </section>
  )
}

export default Analytics