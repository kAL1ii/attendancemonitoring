import {BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateTicketPage from './CreateTicketPage/CreateTicket.jsx'
import DashboardPage from './DashboardPage/Dashboard.jsx'
import './App.css';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashboardPage/>}/>
          <Route path='/CreateTicketPage' element={<CreateTicketPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
