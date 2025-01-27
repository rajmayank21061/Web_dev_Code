import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Header = () => {
  const d = useContext( DataContext)
  return (
    <div>
        <h2>This is Header {d.city}</h2>
    </div>
  )
}

export default Header
