import React from 'react'
import ApiFetching from './Components/ApiFetching'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Productdetails from './Components/Productdetails'

function App() {
  return (
    <div>
      <h1>apps</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/fetching' element={<ApiFetching/>}/>
          <Route path='/details/:id' element={<Productdetails/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
