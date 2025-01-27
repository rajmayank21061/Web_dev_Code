import React from 'react'
import { useAppSelector } from '../redux/hooks'

const CountValue:React.FC = () => {

    const count = useAppSelector( s => s.counter);

  return (
    <div>
      <h1> My Comp : {count}</h1>
    </div>
  )
}

export default CountValue
