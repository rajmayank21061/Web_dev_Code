import { useState } from 'react'

function Car(props){
  return <li>THis is a {props.brand} and id is {props.key} </li>
}

const App = () => {

  const [day,setDay] = useState("Sunday");
  const [sq,setSq] = useState(2);

  const cars = [
    {id:1 ,brand:"BMW"},
    {id:2 ,brand:"BUGAATI"},
    {id:3 ,brand:"AUDI"},
];

  return (
    
    <div>
      <button onClick={() => setDay("Monday")}>  It a {day}</button>
      <button onClick={ () => setSq( sq*2 ) }> {sq} multiplication {setSq}</button>

      <h1>There are cars brand house.</h1>
        <ul>
            { cars.map( (a) => <Car key={a.id} brand={a.brand}/> )} 
        </ul>

        
    </div>
  )
}

export default App
