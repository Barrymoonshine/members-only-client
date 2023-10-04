import './MyAccount.css';
import useUserState from '../../hooks/useUserState';
import useUserDispatch from '../../hooks/useUserDispatch';
import { Navigate } from 'react-router-dom';

const MyAccount = () => {
  const { isLoggedIn, isAdmin, isMember } = useUserState();
  const { handleLogOut } = useUserDispatch();

  return (
    <>
      {!isLoggedIn ? (
        <Navigate to='/' />
      ) : (
        <>
          <h2>My Account</h2>
          <div className='my-account-container'>
            <h4>Your permissions</h4>
            {!isAdmin && !isMember && (
              <ul>
                <li>
                  ✘ You are not an Admin. This means you can't delete posts
                </li>
                <li>
                  ✘ You are not a Member. This means you can't view who posted
                  and when. To become a Member visit the Join Us page
                </li>
              </ul>
            )}
            {isAdmin && !isMember && (
              <ul>
                <li>✓ You are a site Admin!</li>
                <li>
                  ✘ You are not a Member. This means you can't view who posted
                  and when. To become a Member visit the Join Us page
                </li>
              </ul>
            )}
            {isAdmin && isMember && (
              <ul>
                <li>✓ You are a site Admin</li>
                <li>✓ You are a Member</li>
                <li>Congrats on completing ClubLand!</li>
              </ul>
            )}
            <button onClick={() => handleLogOut()} className='log-out-button'>
              Log Out
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default MyAccount;
