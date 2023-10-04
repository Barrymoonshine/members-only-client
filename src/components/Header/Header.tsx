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
            <NavLink
              className='nav-links'
              to='/join-us'
              style={{ textDecoration: 'none' }}
            >
              Join Us
            </NavLink>
            <li>
              <NavLink
                className='nav-links'
                to='/create'
                style={{ textDecoration: 'none' }}
              >
                Create
              </NavLink>
            </li>
            <li>My Account</li>
          </ul>
        )}
        {isLoggedIn && isAdmin && isMember && (
          <ul>
            <li>
              <NavLink
                className='nav-links'
                to='/create'
                style={{ textDecoration: 'none' }}
              >
                Create
              </NavLink>
            </li>
            <li>My Account</li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
