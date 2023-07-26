import React, { FC } from 'react';

import './Header.scss';

const Header: FC = () => {
  return (
    <header>
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png"
          alt="Star Wars"
        />
      </div>
      <ul className="navigation-list">
        <li className="nav-item">Characters</li>
        <li className="nav-item">Locations</li>
        <li className="nav-item">Starships</li>
      </ul>
      <a className="extra" href="https://swapi.dev/">
        {' '}
        API
      </a>
    </header>
  );
};

export default Header;
