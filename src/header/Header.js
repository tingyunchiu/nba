import React from 'react';
import logo from './logo_160.png';
import {Avatar} from '@material-ui/core';

import './Header.css';

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo"/>
      <Avatar src="/broken-image.jpg" />
    </div>
  );
}

export default Header;
