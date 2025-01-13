
import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = ({currentPageTitle}) => {
  return (
    
        <div className='w-full flex gap-3 mb-5'>
        <Link to={'/'} className='text-gray-500 hover:text-gray-800'>Home
        </Link>
        <p>/</p>
        <p className='text-gray-900'>{currentPageTitle}</p>
    </div>
  )
}

export default BreadCrumb