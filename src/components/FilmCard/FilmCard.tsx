import React, { FC } from 'react';
import './FilmCard.scss';

const FilmCard: FC = () => {
  return (
    <div className="FilmCard">
      <img src={filmPoster} alt="" />
      <div className="FilmCard-info">
        <h1>{fIlmTitle}</h1>
        <p>{englishTitle}</p>
        <p>{filmYear}</p>
        <p>{filmDirector}</p>
        <p>{filmActors}</p>
        <p>{filmGenre}</p>
        <p>{filmRate}</p>
      </div>
    </div>
  );
};

export default FilmCard;
