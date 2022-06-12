import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <section>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='uppercase text-green-200 '>growing with data analytics</p>

            <h1 className='capitalize font-bold text-3xl text-white md:text-4xl lg:5xl md:py-4 py-2'>Grow with data.</h1>

            <div className='flex justify-center font-bold'>
            <p className='text-white text-xl'>fast, flexible financng for </p>

            <Typed className='text-gray-400 text-center md:text-2xl text-xl px-2' strings={['BTB', 'BTC', 'SASS']} typeSpeed={40} backSpeed={50} loop/>
            </div>

            <p className='text-gray-400 py-2 font-bold text-lg md:text-xl'>Monitor your data analytics to increase revenue for BTB,BTC,& SASS platforms.</p>

            <button className='w-32 py-2 mt-2 rounded-lg bg-green-200 font-semibold text-black border mx-auto'>Get Started</button>
        </div>
    </section>
  )
}

export default Hero