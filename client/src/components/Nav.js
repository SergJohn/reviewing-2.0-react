import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

const Nav = () => (
  <React.Fragment>
    <header className="App-header">
      <div>
        <a
          className="App-link"
          href="/"
        >
          <HomeIcon />
        </a>

      </div>
      <Link to="/books">
        <a
          className="App-link"
          href="/books"
        >
          Books
        </a>
      </Link>

    </header>
  </React.Fragment>

);

export default Nav;