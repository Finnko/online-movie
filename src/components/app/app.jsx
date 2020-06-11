import React from "react";
import PropTypes from "prop-types";
import {Router, Route, Switch} from 'react-router-dom';
import history from '../../history';
import MoviePropType from "../../prop-types/movie";
import Main from "../main/main.jsx";

const App = ({promo, movies}) => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Main
            promo={promo}
            movies={movies}
          />
        </Route>
        <Route path="/movie/:id" />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  promo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(MoviePropType).isRequired,
};

export default App;
