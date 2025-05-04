import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBar from './components/layouts/NavBar'
import Container from './components/layouts/Container'
import Home from './components/pages/Home'
import Createbooks from './components/pages/CreateBooks'
import ListBooks from './components/pages/Listbooks'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      {/* <Container>
        <NavBar /> 
        <Home />
        <Createbooks />
        <ListBooks />
      </Container> */}

      <BrowserRouter>
        <Container>
            <Routes>
              <Route path='/' element={<NavBar />}>
                  <Route path='/' element={<Home />} />
                  <Route path='/listBook' element={<ListBooks />} />
                  <Route path='/newBook' element={<Createbooks />} />
              </Route>
            </Routes>
        </Container>
      </BrowserRouter>

        
    </>
  )
}

export default App