import React from 'react'
import "./App.css"
import Home from './Pages/Home/Home'
import Aboutus from './Pages/Aboutus/Aboutus'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Blogs from './Pages/Blogs/Blogs'
import Faqs from './Pages/Faqs/Faqs'
import Search from './Pages/Search/Search'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Aboutus' element={<Aboutus/>}/>
          <Route path='/Blogs' element={<Blogs/>}/>
          <Route path='/Faqs' element={<Faqs/>}/>
          <Route path='/Search'element={<Search/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
