import * as React from 'react';
import {Router, Route, Switch, withRouter} from 'react-router-dom';
import history from '../../history';
import {PathName} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import SignIn from '../../pages/sign-in/sign-in';
import MyListPage from '../../pages/my-list-page/my-list-page';
import PlayerPage from '../../pages/player-page/player-page';
import PrivateRoute from '../private-route/private-route';

const MoviePageWrapped = withRouter(MoviePage);
const PlayerPageWrapped = withRouter(PlayerPage);
const SignInPageWrapped = withRouter(SignIn);
const AddReviewPageWrapped = withRouter(AddReviewPage);

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={PathName.ROOT}>
          <MainPage />
        </Route>
        <Route path={`${PathName.SIGN_IN}`}>
          <SignInPageWrapped />
        </Route>
        <PrivateRoute
          exact={false}
          path={`${PathName.MOVIE_PAGE}:id${PathName.ADD_REVIEW}`}
        >
          <AddReviewPageWrapped />
        </PrivateRoute>
        <Route path={`${PathName.MOVIE_PAGE}:id`}>
          <MoviePageWrapped />
        </Route>
        <Route path={`${PathName.PLAYER}:id`}>
          <PlayerPageWrapped />
        </Route>
        <PrivateRoute
          exact
          path={`${PathName.MY_LIST}`}
        >
          <MyListPage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default App;
