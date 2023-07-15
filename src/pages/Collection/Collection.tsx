import React, { FC, useEffect } from 'react';
import './Collection.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from 'redux/reducers/moviesReducer';
import { AppDispatch, RootState } from 'redux/store/store';

// import FilmCard from '../../components/FilmCard/FilmCard';

const useAppDispatch = () => useDispatch<AppDispatch>();

const Collection: FC = () => {
  const dispatch = useAppDispatch();

  const movies = useSelector((state: RootState) => state.movies.movies);

  console.log(movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="Collection-wrapper">
      <div className="filters">фильтры</div>
      <h1 className="Collection__title">Популярное</h1>
      <div className="FilmCard-wrapper">
        {/* <FilmCard /> */}
      </div>
    </div>
  );
};

export default Collection;
