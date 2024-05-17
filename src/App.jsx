import React from 'react'
import TopAnime from './components/TopAnime'
import ShowResults from './components/ShowResults'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Description from './pages/Description'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/animeinfo' element={<Description/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App