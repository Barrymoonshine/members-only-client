import './MyAccount.css';
import useUserState from '../../hooks/useUserState';
import useUserDispatch from '../../hooks/useUserDispatch';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

type AdminError = string | boolean;

const MyAccount = () => {
  const { isLoggedIn, isAdmin, isMember, userID, isLoading, username } =
    useUserState();
  const { handleLogOut, handleToggleAdminStatus } = useUserDispatch();
  const [adminError, setAdminError] = useState<AdminError>(false);

  const reqToggleAdminStatus = async () => {
    const success = await handleToggleAdminStatus(userID, !isAdmin);
    if (!success) {
      setAdminError(
        'There has been an error with updating your Admin status, please try again '
      );
    }
  };

  return (
    <>
      {!isLoggedIn ? (
        <Navigate to='/' />
      ) : (
        <>
          <h2>{username}'s Account</h2>
          <div className='my-account-container'>
            <h4>Your permissions</h4>
            {!isAdmin && !isMember && isLoggedIn && (
              <ul>
                <li>
                  ✘ You are not an Admin. This means you can't delete posts
                </li>
                <li>
                  <button
                    className='add-admin-button'
                    disabled={isLoading}
                    onClick={() => reqToggleAdminStatus()}
                  >
                    Become an Admin
                  </button>
                  {adminError && <li className='admin-error'>{adminError}</li>}
                </li>
                <li>
                  ✘ You are not a Member. This means you can't view who posted
                  and when. To become a Member visit the Join Us page
                </li>
              </ul>
            )}
            {!isAdmin && isMember && isLoggedIn && (
              <ul>
                <li>
                  ✘ You are not an Admin. This means you can't delete posts
                </li>
                <li>
                  <button
                    className='add-admin-button'
                    disabled={isLoading}
                    onClick={() => reqToggleAdminStatus()}
                  >
                    Become an Admin
                  </button>
                  {adminError && <li className='admin-error'>{adminError}</li>}
                </li>
                <li>
                  ✓ You are a Member. This means you can view who posted and
                  when
                </li>
              </ul>
            )}
            {isAdmin && !isMember && isLoggedIn && (
              <ul>
                <li>
                  ✓ You are a site Admin. This means you can delete posts!
                </li>
                <li>
                  <button
                    className='remove-admin-button'
                    disabled={isLoading}
                    onClick={() => reqToggleAdminStatus()}
                  >
                    Remove Admin status
                  </button>
                  {adminError && <li className='admin-error'>{adminError}</li>}
                </li>
                <li>
                  ✘ You are not a Member. This means you can't view who posted
                  and when. To become a Member visit the Join Us page
                </li>
              </ul>
            )}
            {isAdmin && isMember && isLoggedIn && (
              <>
                <ul>
                  <li>
                    ✓ You are a site Admin. This means you can delete posts!
                  </li>
                  <li>
                    <button
                      className='remove-admin-button'
                      disabled={isLoading}
                      onClick={() => reqToggleAdminStatus()}
                    >
                      Remove Admin status
                    </button>
                    {adminError && <li>{adminError}</li>}
                  </li>
                  <li>
                    ✓ You are a Member. This means you can view who posted and
                    when
                  </li>
                </ul>
                <p>Congrats on completing ClubLand!</p>
              </>
            )}
            <button
              disabled={isLoading}
              onClick={() => handleLogOut()}
              className='log-out-button'
            >
              Log Out
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default MyAccount;
