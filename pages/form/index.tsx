import React from 'react'

const Form = () => {
  return (
    <div className='bg-[#F4F9FF] grid h-screen'>
        <div className='bg-white p-10 w-80 h-auto text-center m-auto'>
  
          <div>
            <h1 className='text-xl font-bold mb-3'>Join the<br/>community</h1>
            <p className='text-xs mb-3'>Take your art to the next level.Get it
              seen by millions of people.</p>
              <button className='bg-[#4A68AE] text-xs font-semibold w-full text-white px-8 py-2 rounded-md'>Join with Facebook</button>
              <p className='mb-3 mt-3 text-xs'>Or</p>
          </div>
          <div className='grid grid-cols-2 gap-2 mb-3'>
            <input className='px-2 py-2 border text-xs font-semibold' type='text' placeholder='First name'/>
            <input  className='px-2 py-2 border text-xs font-semibold'  type='text' placeholder='Last name'/>
          </div>
          <div className='grid grid-cols-1 gap-2 mb-3'>
            <input  className='px-2 py-2 text-xs font-semibold border'  type='email' placeholder='Email'/>
            <input  className='px-2 py-2 text-xs font-semibold border'  type='Password' placeholder='Password'/>
            <button  className='bg-[#1D2C4B] text-xs font-semibold w-full text-white px-8 py-2 rounded-md'>Create New Account</button>
          </div>
          <div>
            <p className='text-[8px] p-3'>By joining, you agree to our Terms of<br/>
             Service and Privacy Policy</p>
          </div>
          </div>

    </div>
  )
}

export default Form