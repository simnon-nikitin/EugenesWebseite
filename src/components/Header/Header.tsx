import { FC } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <header>
      <ul className="navigation-list">
        <li className="nav-item">
          <Link to="/" style={{ textDecoration: 'none' }}>
            EUGENE NIKITIN
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/video" style={{ textDecoration: 'none' }}>
            VIDEO
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/photo" style={{ textDecoration: 'none' }}>
            PHOTO
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            CONTACT
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
