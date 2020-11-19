import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import FilmDetailsPage from './pages/Details/FilmDetailsPage';

import cls from './App.scss';
import ListContainer from './components/ListContainer/ListContainer';

const App = () => {
  console.log(cls);
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" component={HomePage} exact />
        <Route path="/films/:id" component={FilmDetailsPage} />
        <ListContainer />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
