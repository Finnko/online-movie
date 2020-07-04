import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from '../../history';
import {PathName} from '../../const';
import MainPage from '../../pages/main-page/main-page.jsx';
import MoviePage from '../../pages/movie-page/movie-page.jsx';
import AddReviewPage from '../../pages/add-review-page/add-review-page.jsx';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={PathName.ROOT}>
          <MainPage />
        </Route>
        <Route path={`${PathName.MOVIE_PAGE}:id${PathName.ADD_REVIEW}`}>
          {({match}) => (
            <AddReviewPage match={match}/>
          )}
        </Route>
        <Route path={`${PathName.MOVIE_PAGE}:id`}>
          {({match}) => (
            <MoviePage match={match}/>
          )}
        </Route>
      </Switch>
    </Router>
  );
};

App.propTypes = {};

export default App;
