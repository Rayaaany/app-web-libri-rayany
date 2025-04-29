import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBar from './components/layouts/NavBar'
import Container from './components/layouts/Container'
import Home from './components/pages/Home'
import CreateBooks from './components/pages/CreateBooks'
import ListBooks from './components/pages/ListBooks'

function App() {
  const [count, setCount] = useState(0)

  return ( 
    <> 
      <Container> 
        <NavBar /> 
        {/* <Home />*/}
        {/* <CreateBooks />*/}
        <ListBooks />
      </Container> 
    </> 
  )
}

export default App
