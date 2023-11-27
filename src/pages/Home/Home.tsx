import React from 'react';
import './Home.scss';
import Gallery from 'components/Gallery/Gallery';

const Home: React.FC = () => {
  const contextImages = require.context('../../assets/images', false, /\.jpg$/);
  const contentImages: string[] = contextImages.keys().map(contextImages);
  return (
    <div className="homePage">
      <Gallery images={contentImages} />
    </div>
  );
};

export default Home;
