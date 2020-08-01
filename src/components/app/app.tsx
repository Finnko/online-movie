import * as React from 'react';
import {Router, Route, Switch, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import history from '../../history';
import {PathName} from '../../const';
import MainPage from '../../pages/main-page/main-page.jsx';
import MoviePage from '../../pages/movie-page/movie-page.jsx';
import AddReviewPage from '../../pages/add-review-page/add-review-page.jsx';
import SignIn from '../../pages/sign-in/sign-in.jsx';
import MyListPage from '../../pages/my-list-page/my-list-page.jsx';
import PlayerPage from '../../pages/player-page/player-page.jsx';
import PrivateRoute from '../private-route/private-route';
import withReviewData from '../../hocs/with-review-data/with-review-data';
import withAuthData from '../../hocs/with-auth-data/with-auth-data';

// const AddReviewPageWrapped = compose(
//     withRouter,
//     withReviewData
// )(AddReviewPage);
const MoviePageWrapped = withRouter(MoviePage);
const PlayerPageWrapped = withRouter(PlayerPage);
const SignInPageWrapped = withAuthData(SignIn);

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
        {/*<PrivateRoute*/}
        {/*  exact={false}*/}
        {/*  path={`${PathName.MOVIE_PAGE}:id${PathName.ADD_REVIEW}`}*/}
        {/*>*/}
        {/*  <AddReviewPageWrapped />*/}
        {/*</PrivateRoute>*/}
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
