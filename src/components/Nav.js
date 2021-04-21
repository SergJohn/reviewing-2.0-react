import React from 'react';
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


      <a
        className="App-link"
        href="/books"
      >
        Books
        </a>
    </header>
  </React.Fragment>

);

export default Nav;