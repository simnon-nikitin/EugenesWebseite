import React from 'react';
import './App.scss';
import Collection from 'pages/Collection/Collection';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
// import Film from './pages/Film/Film';
import 'assets/fonts/fonts.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Collection />
      {/* <Film /> */}
      <Footer />
    </div>
  );
};

export default App;
