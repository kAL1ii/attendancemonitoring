import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './assets/Pages/Dashboard/Dashboard.jsx';
import ViewTicketPage from './assets/Pages/ViewTicket/ViewTicket.jsx';
import SelectRole from './assets/Pages/SelectRole/SelectRole.jsx';
import GuestForm from './assets/Pages/GuestForm/GuestForm.jsx';
import ParentForm from './assets/Pages/ParentForm/ParentForm.jsx';
import StudentForm from './assets/Pages/StudentForm/StudentForm.jsx';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/select-role" element={<SelectRole />} />
          <Route path="/ticket-guest" element={<GuestForm />} />
          <Route path="/ticket-parent" element={<ParentForm />} />
          <Route path="/ticket-student" element={<StudentForm />} />
          <Route path="/view-tickets" element={<ViewTicketPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
