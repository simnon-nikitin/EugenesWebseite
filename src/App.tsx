import React from 'react';
import './App.scss';
import Header from 'components/Header/Header';
import 'assets/fonts/fonts.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Video from 'pages/Video/Video';
import Photo from 'pages/Photo/Photo';
import Contact from 'pages/Contact/Contact';
import Footer from 'components/Footer/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="contanier">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video" element={<Video />} />
            <Route path="/photo" element={<Photo />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </div>
  );
};

export default App;
