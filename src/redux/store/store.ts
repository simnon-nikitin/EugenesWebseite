import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from 'redux/reducers/moviesReducer';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    // Другие редьюсеры вашего приложения могут быть добавлены здесь
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
