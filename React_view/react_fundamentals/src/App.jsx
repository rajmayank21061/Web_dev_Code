import { useState} from 'react'
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Hook_useRef from './hook/Hook_useRef';
import Hook_useEffect from './hook/Hook_useEffect';
import Hook_useState from './hook/Hook_useState';


const App = () => {

  const [day,setDay] = useState("Sunday");
  const [sq,setSq] = useState(2);

  function shot(a){
    console.warn(a);
  }
  return (
    <Router>
      <button onClick={ shot("shoot!")} >Take a shot</button>
      <button onClick={() => setDay("Monday" +1 )}>  It a {day}</button>
      <button onClick={ () => setSq( sq*2 ) }> {sq} multiplication {setSq}</button>
      

      <nav>
        <ul>
          <li>
            <Link to = "/useState">UseState</Link>
          </li>
          <li>
            <Link to = "/useEffect">UseEffect</Link>
          </li>
          <li>
            <Link to = "/useReference">UseReference</Link>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/useState" element={<Hook_useState/>}></Route>
        <Route path="/useEffect" element={<Hook_useEffect/>}></Route>
        <Route path="/useRef" element={<Hook_useRef/>}></Route>
      </Routes>
     
    </Router>
  )
}

export default App
