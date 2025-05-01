import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import NavBar from './components/layouts/NavBar'
import Container from './components/layouts/Container'
import Home from './components/pages/Home'
import CreateBooks from './components/pages/CreateBooks'
import ListBooks from './components/pages/ListBooks'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newBook" element={<CreateBooks />} />
          <Route path="/listBook" element={<ListBooks />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App

