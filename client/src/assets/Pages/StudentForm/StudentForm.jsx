import './StudentForm.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const StudentForm = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(0);

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index); // Set active menu item index
  };

  const handleToggleSidebar = () => {
    // Toggle sidebar
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hide');
  };
  return (
    <>
      {/* CONTENT */}
      {/* SIDEBAR */}
      <section id="sidebar">
        <Link to="/">
          <a href="#" className="brand">
            <i className="bx bxl-venmo"></i>
            <span className="text">Versatily</span>
          </a>
        </Link>
        <ul className="side-menu top">
          <li className="side-menu-title">Ticketing System</li>
          <Link to="/select-role">
            <li className={activeMenuItem === 0 ? 'active' : ''}>
              <a href="#" onClick={() => handleMenuItemClick(0)}>
                <i className="bx bxs-plus-square"></i>
                <span className="text">Generate Ticket</span>
              </a>
            </li>
          </Link>
          <Link to="/view-tickets">
            <li className={activeMenuItem === 1 ? 'active' : ''}>
              <a href="#" onClick={() => handleMenuItemClick(0)}>
                <i className="bx bxs-objects-vertical-bottom"></i>
                <span className="text">Ticket List</span>
              </a>
            </li>
          </Link>
        </ul>
      </section>
      {/* SIDEBAR */}

      <section id="content">
        {/* NAVBAR */}
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
          <input type="checkbox" id="switch-mode" hidden />
          <label htmlFor="switch-mode" className="switch-mode"></label>
          <a href="#" className="notification">
            <i className="bx bxs-bell"></i>
          </a>
        </nav>
        {/* NAVBAR */}

        {/* MAIN */}
        <main>
          <div className="content-container">
            <h1>Hi</h1>
          </div>
        </main>
      </section>
      {/* MAIN */}
      {/* CONTENT */}
    </>
  );
};

export default StudentForm;
