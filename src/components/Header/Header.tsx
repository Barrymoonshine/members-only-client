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
        <button onClick={() => toggleLogInVisibility()}>Log in</button>
        {isLogInVisible && (
          <LogIn toggleLogInVisibility={toggleLogInVisibility} />
        )}
        <ul>
          <li></li>
          {isLoggedIn && <div>Hello Logged In</div>}
          {isAdmin && <div>Hello isAdmin In</div>}
          {isMember && <div>Hello isMember In</div>}
          <li>Cart TBC</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
