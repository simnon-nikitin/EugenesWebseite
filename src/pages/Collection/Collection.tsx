import React, { FC } from 'react';
import './Collection.scss';
import FilmCard from '../../components/FilmCard/FilmCard';

const Collection: FC = () => {
  return (
    <div className="Collection-wrapper">
      <div className="filters">фильтры</div>
      <h1 className="Collection__title">Популярное</h1>
      <div className="FilmCard-wrapper">
        <FilmCard />
      </div>
    </div>
  );
};

export default Collection;
