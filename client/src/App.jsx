import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './assets/Pages/Home/Home.jsx';
import DashboardPage from './assets/Pages/Dashboard/Dashboard.jsx';
import AccountListPage from './assets/Pages/AccountsList/AccountList.jsx';
import AttendanceListPage from './assets/Pages/AttendanceList/AttendanceList.jsx';
import QRScannerPage from './assets/Pages/QRScanner/qrscanner.jsx';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/acc-list" element={<AccountListPage />} />
          <Route path="/att-list" element={<AttendanceListPage />} />
          <Route path="qrscanner" element={<QRScannerPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
