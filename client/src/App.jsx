import {BrowserRouter, Routes, Route } from 'react-router-dom'
import TicketingPage from './Ticketing/TicketingModule.jsx'
import './App.css';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TicketingPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
