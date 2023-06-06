import axios from 'axios';
import { Dispatch } from 'redux';
import { Movie } from '../types/moviesTypes';

const API_KEY = 'YOUR_TMDB_API_KEY'; // Вставьте ваш API ключ TMDb здесь

// Определение типов действий (actions)
enum MoviesActionTypes {
  FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST',
  FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
  FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE',
}

interface FetchMoviesRequestAction {
  type: MoviesActionTypes.FETCH_MOVIES_REQUEST;
}

interface FetchMoviesSuccessAction {
  type: MoviesActionTypes.FETCH_MOVIES_SUCCESS;
  payload: Movie[];
}

interface FetchMoviesFailureAction {
  type: MoviesActionTypes.FETCH_MOVIES_FAILURE;
  payload: string;
}

type MoviesAction =
  | FetchMoviesRequestAction
  | FetchMoviesSuccessAction
  | FetchMoviesFailureAction;

// Action creators
export const fetchMoviesRequest = (): FetchMoviesRequestAction => ({
  type: MoviesActionTypes.FETCH_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = (movies: Movie[]): FetchMoviesSuccessAction => ({
  type: MoviesActionTypes.FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = (error: string): FetchMoviesFailureAction => ({
  type: MoviesActionTypes.FETCH_MOVIES_FAILURE,
  payload: error,
});

// Асинхронная функция для получения списка фильмов из TMDb API
export const fetchMovies = () => {
  return async (dispatch: Dispatch<MoviesAction>) => {
    dispatch(fetchMoviesRequest());

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );

      const movies: Movie[] = response.data.results;

      dispatch(fetchMoviesSuccess(movies));
    } catch (error) {
      dispatch(fetchMoviesFailure(error.message));
    }
  };
};
