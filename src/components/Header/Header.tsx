import React, { FC } from 'react';

import './Header.scss';

const Header: FC = () => {
  return (
    <header>
      <div className="logo">
        <img src="" alt="KinoSearch" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">Фильмы</li>
          <li className="nav-item">Сериалы</li>
          <li className="nav-item">Актеры</li>
          <li className="nav-item">Рейтинги</li>
        </ul>
      </nav>
      <div className="search">
        <input type="text" placeholder="Поиск" />
        <button type="button">Найти</button>
      </div>
    </header>
  );
};

export default Header;
