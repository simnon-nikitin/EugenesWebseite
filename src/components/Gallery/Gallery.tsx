import React from 'react';
import './Gallery.scss';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${index + 1} pic lost in space`}
            className="gallery-item"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
