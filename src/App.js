import React from 'react'
import NavBar from './component.js/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Messages from './pages/Messages'
import Contact from './pages/Contact'
import About from './pages/About'
import Msg1 from './pages/NestedPags/Msg1'
import Msg2 from './pages/NestedPags/Msg2'
import Msg3 from './pages/NestedPags/Msg3'
const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message" element={<Messages />} >
          <Route path='msg1' element={<Msg1/>}/>
          <Route path='msg2' element={<Msg2/>}/>
          <Route path='msg3' element={<Msg3/>}/>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
