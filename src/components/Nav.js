import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faKey, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from '@auth0/auth0-react';

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <nav>
      <h3> gondathanh </h3>
      <div>
        {isAuthenticated && <span className='text'>{`Hello, ${user.name}`}</span>}
        <span className='button' title='Show Library'>
          <FontAwesomeIcon icon={faMusic} onClick={() => setLibraryStatus(!libraryStatus)} />
        </span>
        {isAuthenticated ? (
          <span className='button' title='Logout'>
            <FontAwesomeIcon icon={faSignOutAlt} onClick={() => logout()} />
          </span>
        ) : (
          <span className='button' title='Sign In'>
            <FontAwesomeIcon icon={faKey} onClick={() => loginWithRedirect()} />
          </span>
        )}
      </div>
    </nav>
  );
};

export default Nav;
