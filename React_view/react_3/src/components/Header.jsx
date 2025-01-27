import React from 'react'

import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className='flex bg-green-400 items-center justify-between '>
      <h1 className='text-3xl font-bold'>mynk_setter
      <input type="text" className='bg-blue-400 text-black' />
      </h1>
    <div className='flex gap-3'>
        <Link to ="/">Home</Link>
        <Link to ="/about">About</Link>
        <Link to ="/courses">Courses</Link>
        <Link to ="/contact">Contact</Link>
    </div>
    </div>
  )
}

export default Header
