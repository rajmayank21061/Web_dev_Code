import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Section = () => {
  const useData = useContext(DataContext)
  return (
    <div>
        <h2>THIS IS A SECTION PART{useData.name}</h2>
    </div>
  )
}

export default Section
