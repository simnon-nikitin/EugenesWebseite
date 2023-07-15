import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Movie } from 'redux/types/moviesTypes';
import axios from 'axios';
import { API_KEY, JWT_TOKEN } from 'constants/constants';

interface MoviesState {
  loading: boolean;
  movies: Movie[];
  error: string | null;
}

const initialState: MoviesState = {
  loading: false,
  movies: [],
  error: null,
};

// export const fetchMovies = createAsyncThunk<ИнтерфейсПолученныхДанных, ИнтерфейсПараметров, Интерфейс.ошибки>(
export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (props, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
        {
          headers: {
            Authorization: `Bearer ${JWT_TOKEN}`, // Добавление токена авторизации в заголовок запроса
          },
        }
      );

      console.log(response);
      console.log(response.data);
      const movies: Movie[] = response.data.results;

      return movies;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // Обработка значения ошибки
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
        state.error = null;
      })
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export default moviesSlice.reducer;
