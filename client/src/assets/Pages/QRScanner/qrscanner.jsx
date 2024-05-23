import "./qrscanner.css";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const QRScanner = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const [scanResult, setScanResult] = useState(null);

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index); // Set active menu item index
  };

  const handleToggleSidebar = () => {
    // Toggle sidebar
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hide");
  };
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 450,
        height: 450,
      },
      fps: 10,
    });

    scanner.render(success, error);
    function success(result) {
      scanner.clear();
      setScanResult(result);
    }
    function error(err) {
      console.warn(err);
    }
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
            <li className={activeMenuItem === 1 ? "active" : ""}>
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
            <li className={activeMenuItem === 0 ? "active" : ""}>
              <a href="#" onClick={() => handleMenuItemClick(0)}>
                <i className="bx bx-qr-scan"></i>
                <span className="text">QR Scanner</span>
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
        </nav>
        {/* NAVBAR */}
        {/* MAIN */}
        <main>
          <div className="content-container">
            <div className="qrreader-container">
            <h1 className="qr-box-title">SCAN QR CODE</h1>
              <div className="qr-box" id="reader">
                {scanResult ? (
                  <div>
                    Success: <p>{scanResult}</p>
                  </div>
                ) : (
                  <div id="reader"></div>
                )}
              </div>
              <div className="qrreader-pop-up"></div>
            </div>
          </div>
        </main>
      </section>
      {/* MAIN */}
      {/* CONTENT */}
    </>
  );
};

export default QRScanner;
