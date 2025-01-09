import React from 'react'

const Footer = () => {
    const date = new Date();
  return (
    <footer className='px-5 bg-black text-white text-center py-2 mx-5 mt-auto'> 
        <p> &copy; {date.getFullYear()} <a href="https://www.facebook.com/profile.php?id=100044128762450" className='underline text-gray-400'>zaw-htwe</a> All Rights Reserved</p>
    </footer>
  )
}

export default Footer