import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './assets/Pages/Dashboard/Dashboard.jsx';
import AccountSessions from './assets/Pages/AccountSessionList/AccSession.jsx';
import AccountMonitoring from './assets/Pages/AccountMonitoring/AccMonitoring.jsx';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/acc-monitoring" element={<AccountMonitoring />} />
          <Route path="/acc-session" element={<AccountSessions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
