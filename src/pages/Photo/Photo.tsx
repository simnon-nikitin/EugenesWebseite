import React from 'react';
import './Photo.scss';
import Slider from 'components/Slider/Slider';

const Photo: React.FC = () => {
  return (
    <div className="photoPage">
      <Slider />
      <div className="spacer" />
      <Slider />
    </div>
  );
};

export default Photo;
