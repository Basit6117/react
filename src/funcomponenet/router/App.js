import React,{lazy, Suspense} from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Links } from 'react-router-dom'
import Home from './Home'
import About from './About'
 const Contact =  lazy(() =>import('./Contact'));
import Products from './Products'
import Error from './Error'


function App() {
  return (
   <Router>
    <Suspense fallback = {<p>Loading....</p>}>
   <Link to='/' >Home</Link> {' '}
   <Link to='/About' >About</Link>{' '}
   <Link to='/Contact'>Contact</Link>{' '}
   <Link to='/Products' >Products</Link>{' '}
   <Link to='/Products/18' >microwave</Link>{' '}
    <Routes>
        <Route path='/' element = {<Home/> }/>
        <Route path ='/About' element = {<About />} />
        <Route path ='/Contact' element = {<Contact />}/>
        <Route path='/Products' element ={<Products />}/>
        <Route path='*' element = {<Error />}/>
    </Routes>
    </Suspense>
   </Router>
  )
}

export default App
