import './SelectRole.css';
import { Link } from 'react-router-dom';
import ParentImage from '../../img/parents.png';
import StudentImage from '../../img/student.png';
import GuestImage from '../../img/guests.png';

const SelectRole = () => {
  return (
    <>
      <main>
        <div className="content-container">
          <h1>Select your role</h1>
          <p>To start we need to customize your preferences. </p>
          <div className="role-box-container">
            <Link to="/ticket-parent">
              <div className="role-box">
                <img src={ParentImage} alt={ParentImage} width={150} height={150} />
                <br />
                <h1>Parent</h1>
              </div>
            </Link>
            <Link to="/ticket-student">
              <div className="role-box">
                <img src={StudentImage} alt={StudentImage} width={150} height={150} />
                <br />
                <h1>Student</h1>
              </div>
            </Link>
            <Link to="/ticket-guest">
              <div className="role-box">
                <img src={GuestImage} alt={GuestImage} width={150} height={150} />
                <br />
                <h1>Guest</h1>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default SelectRole;
