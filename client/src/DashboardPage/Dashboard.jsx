import './Dashboard.css'
import { useState } from 'react';
import {Link} from 'react-router-dom';

const Dashboard = () => {

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
            <i className='bx bxl-venmo'></i>
            <span className="text">Versatily</span>
          </a>
        </Link>
        <ul className="side-menu top">
          <li className="side-menu-title">Ticketing System</li>
          <Link to="/Create_Ticket">
            <li className={activeMenuItem === 1 ? 'active' : ''}>
              <a href="#" onClick={() => handleMenuItemClick(0)}>
                <i class='bx bxs-plus-square' ></i>
                <span className="text">Create Tickets</span>
              </a>
            </li>
          </Link>
          <Link to="/View_Tickets">
            <li className={activeMenuItem === 1 ? 'active' : ''}>
              <a href="#" onClick={() => handleMenuItemClick(0)}>
              <i class='bx bxs-objects-vertical-bottom' ></i>
                <span className="text">View Tickets</span>
              </a>
            </li>
          </Link>
        </ul>
      </section>
      {/* SIDEBAR */}

      <section id="content">
        {/* NAVBAR */}
        <nav>
          <i className='bx bx-menu' onClick={handleToggleSidebar}></i>
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..."/>
              <button type="submit" className="search-btn"><i className='bx bx-search' ></i></button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden/>
          <label htmlFor="switch-mode" className="switch-mode"></label>
          <a href="#" className="notification">
            <i className='bx bxs-bell' ></i>
          </a>
        </nav>
        {/* NAVBAR */}

        {/* MAIN */}
        <main>
          <div className="welcome">
            <div className="WT1">
              Welcome to the Ticketing Module<br/>
            </div>
            <div className="WT2">Cusina De Mariquina</div>
          </div>
          <div className="PopMenu">
            <div className="PopText">Tickets</div>
              <div className="PopVA">
                <button className="BtnVA">Create Ticket</button>
              </div>
              <div className="PopChoices">

              </div>
            </div>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </>
  )
}

export default Dashboard