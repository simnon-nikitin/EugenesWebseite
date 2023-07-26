import React from 'react';
import './App.scss';
import Header from 'components/Header/Header';
import 'assets/fonts/fonts.scss';
import Home from 'pages/Home/Home';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="contanier">
        <Home />
      </div>
    </div>
  );
};

export default App;
