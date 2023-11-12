import React, { useState } from 'react';
import './Slider.scss';

// import slide1 from './images/slide 1.jpg';
// import slide2 from './images/slide 2.jpg';
// import slide3 from './images/slide 3.jpg';

const Slider: React.FC = () => {
  return (
    <div className="slider-container">
      <div className="control_prev">
        <svg
          width="16"
          height="31"
          viewBox="0 0 16 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5528 30.1971C14.2126 30.1971 13.8723 30.0787 13.6455 29.783L0.830444 16.1767C0.320109 15.6442 0.320109 14.816 0.830444 14.2836L13.6455 0.67733C14.1559 0.14491 14.9497 0.14491 15.4601 0.67733C15.9704 1.20975 15.9704 2.03796 15.4601 2.57038L3.55223 15.2301L15.5168 27.8899C16.0271 28.4223 16.0271 29.2505 15.5168 29.783C15.1765 30.0196 14.893 30.1971 14.5528 30.1971Z"
            fill="#1E0036"
          />
        </svg>
      </div>
      <div />
      <div className="photoarea">
        <p>photo</p>
      </div>
      <div className="control_next">
        <svg
          width="16"
          height="30"
          viewBox="0 0 16 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.78477 29.9297C1.44454 29.9297 1.16102 29.8114 0.877503 29.5748C0.367167 29.0424 0.367167 28.2142 0.877503 27.6817L12.7853 14.9628L0.877503 2.30305C0.367167 1.77063 0.367167 0.942416 0.877503 0.409996C1.38784 -0.122424 2.18169 -0.122424 2.69203 0.409996L15.5071 14.0163C16.0175 14.5487 16.0175 15.3769 15.5071 15.9093L2.69203 29.5156C2.46521 29.7523 2.12499 29.9297 1.78477 29.9297Z"
            fill="#1E0036"
          />
        </svg>
      </div>
    </div>
  );
};

export default Slider;
