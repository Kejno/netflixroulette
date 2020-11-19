import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import FilmDetailsPage from './pages/Details/FilmDetailsPage';

import cls from './App.scss';

const App = () => {
  return (
    <div className={cls.mainContainer}>
      <Router>
        <Header />
        <main>
          <Route path="/" component={HomePage} exact />
          <Route path="/search/:searchParams" component={HomePage} />
          <Route path="/films/:id" component={FilmDetailsPage} />
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
