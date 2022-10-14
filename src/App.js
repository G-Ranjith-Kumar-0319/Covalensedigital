import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageOne from './Components/PageOne'
import PageTwo from './Components/PageTwo'
const App = ()=>{
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageOne/>}/>
      <Route path="/thank-you-page/:name" element={<PageTwo/>}/>
    </Routes>
  </BrowserRouter>
}

export default App