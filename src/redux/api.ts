import axios from 'axios';
import { Dispatch } from 'redux';

const URL = 'https://api.themoviedb.org/3/movie/popular?api_key=';
const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTJmODVlNDljODNkMTc5YzU1NjAzYzY2MjM3MGU4YiIsInN1YiI6IjY0Nzc4MzQxYjExMzFmMDBkZTY3NzdlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.briIXc6UlbYAlohk-IYSY_VgllxkksDegpuy_jOlnCU';

// Определение типа для фильма
interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

// Определение типа для состояния
interface MoviesState {
  loading: boolean;
  movies: Movie[];
  error: string | null;
}

// Действия Redux
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

// Создание action creators
const fetchMoviesRequest = (): FetchMoviesRequestAction => ({
  type: MoviesActionTypes.FETCH_MOVIES_REQUEST,
});

const fetchMoviesSuccess = (movies: Movie[]): FetchMoviesSuccessAction => ({
  type: MoviesActionTypes.FETCH_MOVIES_SUCCESS,
  payload: movies,
});

const fetchMoviesFailure = (error: string): FetchMoviesFailureAction => ({
  type: MoviesActionTypes.FETCH_MOVIES_FAILURE,
  payload: error,
});

// Функция для получения списка фильмов из TMDb API
export const fetchMovies = () => {
  return async (dispatch: Dispatch<MoviesAction>) => {
    dispatch(fetchMoviesRequest());

    try {
      const response = await axios.get(`${URL}${API_KEY}`);

      const movies: Movie[] = response.data.results;

      dispatch(fetchMoviesSuccess(movies));
    } catch (error) {
      dispatch(fetchMoviesFailure(error.message));
    }
  };
};

// Редьюсер Redux для управления состоянием фильмов
const initialState: MoviesState = {
  loading: false,
  movies: [],
  error: null,
};

const moviesReducer = (state = initialState, action: MoviesAction): MoviesState => {
  switch (action.type) {
    case MoviesActionTypes.FETCH_MOVIES_REQUEST:
      return { ...state, loading: true, error: null };
    case MoviesActionTypes.FETCH_MOVIES_SUCCESS:
      return { ...state, loading: false, movies: action.payload };
    case MoviesActionTypes.FETCH_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default moviesReducer;
