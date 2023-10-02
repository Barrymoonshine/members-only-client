import './Header.css';
import { NavLink } from 'react-router-dom';
import useUserState from '../../hooks/useUserState';

const Header = () => {
  const { isLoggedIn, isAdmin, isMember } = useUserState();

  return (
    <header>
      <NavLink to='/' style={{ textDecoration: 'none' }}>
        <h3>ClubLand</h3>
      </NavLink>
      <nav>
        <ul>
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
