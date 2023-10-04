import './Header.css';
import { NavLink } from 'react-router-dom';
import useUserState from '../../hooks/useUserState';
import { useState } from 'react';
import LogIn from '../LogIn/LogIn';

const Header = () => {
  const [isLogInVisible, setIsLogInVisible] = useState(false);
  const { isLoggedIn, isAdmin, isMember } = useUserState();

  const toggleLogInVisibility = () => {
    setIsLogInVisible((prevState) => !prevState);
  };

  return (
    <header>
      <NavLink to='/' style={{ textDecoration: 'none' }}>
        <h3>ClubLand</h3>
      </NavLink>

      <nav>
        {!isLoggedIn && (
          <button
            className='log-in-button'
            onClick={() => toggleLogInVisibility()}
          >
            Log In
          </button>
        )}
        {isLogInVisible && (
          <LogIn toggleLogInVisibility={toggleLogInVisibility} />
        )}
        {isLoggedIn && isAdmin && !isMember && (
          <ul>
            <li>
              <NavLink to='/sign-up' style={{ textDecoration: 'none' }}>
                <h3>Sign Up</h3>
              </NavLink>
            </li>
            <li>Create</li>
            <li>My Account</li>
          </ul>
        )}
        {isLoggedIn && isAdmin && isMember && (
          <ul>
            <li>Join Us</li>
            <li>My Account</li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
