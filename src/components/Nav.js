import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faKey } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from '@auth0/auth0-react';

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <nav>
      <h3> gondathanh </h3>
      <div>
        <button onClick={() => setLibraryStatus(!libraryStatus)}>
          <FontAwesomeIcon icon={faMusic} />
        </button>
        {isAuthenticated ? (
          <button className='no-cursor'>{`Hello, ${user.name}.`}</button>
        ) : (
          ''
        )}
        {isAuthenticated ? (
          <button onClick={() => logout()}>
            <FontAwesomeIcon icon={faKey} />
          </button>
        ) : (
          <button onClick={() => loginWithRedirect()}>
            <FontAwesomeIcon icon={faKey} />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
