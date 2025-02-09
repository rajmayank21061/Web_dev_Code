import React from 'react'
import {Link} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Provider} from 'react-redux'

import Navbar from './components/Navbar'
import Products from './components/Products'
import Home from './pages/Home'
import Cart from './pages/Cart'
import store from './store/store'

const App = () => {
  return (
    <div>
      <Provider store={store}>
    <Router>
      <nav>
        <ul>
          <li> <Link to ="/">Home</Link></li>
          <li> <Link to ="/cart">Carts</Link> </li>
          <li> <Link to ="/products">Products</Link> </li>
          <li> <Link to ="/navbar">Navbar</Link> </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element = {<Home/>}>Home</Route>
        <Route path="/cart" element = {<Cart/>}>Cart</Route>
        <Route path='/products' element = { <Products/>}>Products</Route>
        <Route path='/navbar' element = { <Navbar/>}>Navbar</Route>
      </Routes>
    </Router>
    </Provider>
    </div>
  )
}

export default App
