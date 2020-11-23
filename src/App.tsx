import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import FilmDetailsPage from './pages/Details/FilmDetailsPage';
import ErrorPage from './pages/Error/ErrorPage';

import cls from './App.scss';

const App = () => {
  return (
    <div className={cls.mainContainer}>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/search/:searchParams" component={HomePage} />
            <Route path="/" render={() => <h1>NO FOUND</h1>} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
