import React from 'react'
import Button from './Button'

const Form = () => {
  return (
    <form className='mt-8 rounded-[2rem] border bg-[#036C20] px-10 py-5 flex flex-col justify-between h-[49.5rem] lg:w-[70%] w-full'>
        <div className='flex flex-col items-start w-full '>
            <label htmlFor="name" className='mb-3'>Name</label>
            <input type="text" name="name" id="" className='bg-white text-black h-[3.5625rem] w-full rounded px-4'/>
        </div>
        <div className='flex flex-col items-start' > 
            <label htmlFor="name" className='mb-3'>Email</label>
            <input type="text" name="name" id="" className='bg-white text-black h-[3.5625rem] w-full rounded px-4' />
        </div>
        
        <div className='flex flex-col items-start'>
            <label htmlFor="name" className='mb-3'>Message</label>
            <input type="text" name="name" id="" className='bg-white text-black h-[7.5625rem] w-full rounded px-4'/>
        </div>
        <Button variant='secondary'>
            Send Message
        </Button>
    </form>
  )
}

export default Form