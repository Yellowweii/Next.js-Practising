import React from 'react'
import Image from 'next/image'
import { Button } from '@/components'

const Contact = () => {
  return (
    <div>
      <h1 className='text-[60px] mb-[70px] text-center font-bold'>Let's Keep in Touch</h1>
      <div className='flex items-center gap-[100px]'>
        <div className='relative h-[500px] flex-1'>
          <Image src="/contact.png" alt="contact" fill className='object-contain animate-transfer' />
        </div>
        <form className='flex flex-1 flex-col gap-5'>
          <input className='inputStyle' type="text" placeholder='name' />
          <input className='inputStyle' type="text" placeholder='email' />
          <textarea className='inputStyle' placeholder='message' cols={30} rows={10}></textarea>
          <Button text="Send" url="/contact" />
        </form>
      </div>
    </div>
  )
}

export default Contact