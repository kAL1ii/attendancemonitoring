import "./AccountList.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const AccountList = (savedaccounts) => {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const [accounts, setAccounts] = useState([]);

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index); // Set active menu item index
  };

  const handleToggleSidebar = () => {
    // Toggle sidebar
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hide");
  };

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/accounts');
        setAccounts(response.data);
      } catch (error) {
        console.log("Error Fetching Accounts.");
      }
    }
    fetchAccounts();
  }, []);

  return (
    <>
      {/* CONTENT */}
      {/* SIDEBAR */}
      <section id="sidebar">
        <Link to="/dashboard">
          <a href="#" className="brand">
            <i className="bx bxl-venmo"></i>
            <span className="text">Versatily</span>
          </a>
        </Link>
        <ul className="side-menu top">
          <li className="side-menu-title">Attendance Monitoring</li>
          <Link to="/dashboard">
            <li className={activeMenuItem === 1 ? "active" : ""}>
              <a href="#" onClick={() => handleMenuItemClick(0)}>
                <i className="bx bxs-dashboard"></i>
                <span className="text">Dashboard</span>
              </a>
            </li>
          </Link>
          <Link to="/acc-list">
            <li className={activeMenuItem === 0 ? "active" : ""}>
              <a href="#" onClick={() => handleMenuItemClick(0)}>
                <i className="bx bxs-user-account"></i>
                <span className="text">Account List</span>
              </a>
            </li>
          </Link>
          <Link to="/att-list">
            <li className={activeMenuItem === 1 ? "active" : ""}>
              <a href="#" onClick={() => handleMenuItemClick(0)}>
                <i className="bx bx-list-check"></i>
                <span className="text">Attendance List</span>
              </a>
            </li>
          </Link>
          <Link to="/qrscanner">
            <li className={activeMenuItem === 1 ? "active" : ""}>
              <a href="#" onClick={() => handleMenuItemClick(0)}>
                <i className="bx bx-qr-scan"></i>
                <span className="text">QR Scanner</span>
              </a>
            </li>
          </Link>
        </ul>
      </section>
      {/* SIDEBAR */}
      {/* NAVBAR */}
      <section id="content">
        <nav>
          <i className="bx bx-menu" onClick={handleToggleSidebar}></i>
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn">
                <i className="bx bx-search"></i>
              </button>
            </div>
          </form>
        </nav>
        {/* NAVBAR */}
        {/* MAIN */}
        <main>
          <div className="content-container">
            <div className="account-container">
              <div className="selection-filter">
                <label>Filter By: </label>
                <select className="filter-account-table-type">
                  <option value="All">All</option>
                  <option value="Student">Student</option>
                  <option value="Guardian">Guardian</option>
                  <option value="Acquaintance">Acquaintance</option>
                </select>
                  <button>(ALL) SEND EMAIL</button>
              </div>
              <table className="account-list-table">
                <thead>
                  <tr>
                    <th>Account ID</th>
                    <th>Account Name</th>
                    <th>Account Email</th>
                    <th>Account Type</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {accounts.map((account) => (
                    <tr key={account.account_id}>
                      <td>{account.accountID}</td>
                      <td>{account.account_fullName}</td>
                      {/* Add the First Name and Last Name Later for BackEnd and name it accountName */}
                      <td>{account.account_email}</td>
                      <td>{account.account_type}</td>
                      <td>
                        <button onClick={() => onSendEmail(account.account_email)}>Send Email</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </>
  );
};

export default AccountList;
