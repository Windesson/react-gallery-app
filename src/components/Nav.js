import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {

  return ( 
          <nav className="main-nav">
            <ul>
              <li><NavLink to="/Search/Cats">Cats</NavLink></li>
              <li><NavLink to="/Search/Dogs">Dogs</NavLink></li>
              <li><NavLink to="/Search/Computers">Computers</NavLink></li>
            </ul>
          </nav>
    );

}
export default Nav;