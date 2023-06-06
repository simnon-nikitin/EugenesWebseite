import React, { FC } from 'react';
import './Footer.scss';

const Footer: FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>© 2023 KinoSearch</p>
        <ul className="footer-links">
          <li>О нас</li>
          <li>Условия использования</li>
          <li>Политика конфиденциальности</li>
          <li>Реклама на сайте</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
