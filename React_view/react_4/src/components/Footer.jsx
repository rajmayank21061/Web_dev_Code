import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Footer = () => {
  const data_use = useContext(DataContext)
  return (
    <div>
      <h2>this is a footer part. {data_use.age}</h2>
    </div>
  )
}

export default Footer
