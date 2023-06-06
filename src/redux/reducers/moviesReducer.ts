import { MoviesAction } from '../actions/moviesActions';
import { Movie } from '../types/moviesTypes';

// Определение типа для состояния фильмов
interface MoviesState {
  loading: boolean;
  movies: Movie[];
  error: string | null;
}

// Начальное состояние
const initialState: MoviesState = {
  loading: false,
  movies: [],
  error: null,
};

// Редьюсер для управления состоянием фильмов
const moviesReducer = (state = initialState, action: MoviesAction): MoviesState => {
  switch (action.type) {
    case 'FETCH_MOVIES_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_MOVIES_SUCCESS':
      return { ...state, loading: false, movies: action.payload };
    case 'FETCH_MOVIES_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default moviesReducer;
