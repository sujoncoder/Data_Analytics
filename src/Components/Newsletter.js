import React from 'react'

const Newsletter = () => {
  return (
    <section className='text-white px-10 py-16'>

        <main className='max-w-[1200px] mx-auto lg:flex lg:col-span-3 justify-between'>

            {/* tittle here  */}
            <div className='text-center lg:px-4 md:px-4'>
                <h1 className='font-bold text-lg md:text-xl'>Want tips & tricks to optimize your flow?</h1>

                <p className='font-medium text-gray-400 py-2'>Sign up to our newsletter and stay up to date</p>
            </div>

            {/* input here  */}
            <div className='text-center'>
                <input className='rounded px-2 capitalize w-5/6 py-2 my-2 md:w-96' type="email" placeholder='enter your email' />
            </div>

            {/* tittle here  */}
            <div className='text-center'>
            <button className='w-28 py-1 mt-2 rounded-lg bg-pink-200 font-semibold text-black shadow shadow-pink-600 border'>Notify Me</button><br />


            {/* privacy tittle here  */}
           <div className=''>
           <p className='pt-2 text-gray-500'>We care bout the protection of your data</p>

          <p className='text-blue-300 hover:underline capitalize cursor-pointer'>privacy policy</p>
           </div>
            </div>

        </main>
    </section>
  )
}

export default Newsletter