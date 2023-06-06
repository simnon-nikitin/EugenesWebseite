import React, { FC } from 'react';
import './Film.scss';

const Film: FC = () => {
  return (
    <div className="film-contanier">
      <div className="film__poster">
        <img src="../../assets/images/1.jpeg" width={200} height={400} alt="Постер фильма" />
      </div>

      <div className="film_details">
        <h1 className="title">Зеленая миля (1999)</h1>
        <p className="subtitle">The Green Mile 16+</p>
        <p>Длительность: 189 мин.</p>
        <p>Год производства 1999 </p>
        <p>Режиссер: Фрэнк Дарабонт</p>
        <p>Жанр: драма, фэнтези, криминал</p>
      </div>
      <p className="film__description"> описание фильма</p>
    </div>
  );
};

export default Film;
