import React from 'react'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import {increment,decrement} from './redux/slices/counter';
import CountValue from './components/CountValue'
const App = () => {

  const count = useAppSelector( state => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
     <div className="App">
      <header className="App-header">
        <h1>Count is {count} .</h1>
        <button onClick={ () => dispatch(increment() ) }>Increment</button>
        <button onClick={ () => dispatch(decrement() ) }>Decrement</button>
      </header>
      < CountValue />
     </div>
    </>
  )
}

export default App
