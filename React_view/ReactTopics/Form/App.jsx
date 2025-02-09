import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Home from './src/pages/Home.jsx';
import ToDo from './Components/T';
import ContactMe from './src/pages/ContactMe.jsx';
import './App.css';
import Form from './src/pages/Form.jsx';
import MyForm from './src/Components/MyForm.jsx'

function App() {
  
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo">ToDO_Component</Link>
          </li>
          <li>
            <Link to="/contactMe">Contact Me</Link>
          </li>
          <li>
            <Link to="/form">Form </Link>
          </li>
          <li>
            <Link to="/myform">My Form </Link>
          </li>
        </ul>
      </nav> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<ToDo />} />
        <Route path="/contactMe" element={<ContactMe />} />
        <Route path='/form' element= {<Form />}></Route>
        <Route path='/myform' element= {<MyForm />}></Route>
      </Routes>
    </Router>
  );
}

export default App;