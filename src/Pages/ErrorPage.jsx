import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='w-full h-screen flex flex-col justify-center items-center'>
        <div className="text-center">
            <h1 className='text-5xl font-bold mb-3'>404 Not Found</h1>
            <p className='w-96 mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, reprehenderit.</p>
        </div>
        <Link className='border border-black py-1 px-4 text-gray-500' to={'/'}>Return to home</Link>
    </section>
  )
}

export default ErrorPage