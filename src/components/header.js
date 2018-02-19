import React from 'react';
import CustomRouter from './customRouter';

const Header = (props) => {
  return (
    <header>
      <h1>Cider App</h1>
      <h2>Lets Drink Some Cider</h2>
      <nav id="nav">
        <CustomRouter />
      </nav>
    </header>
  )
};

export default Header;
