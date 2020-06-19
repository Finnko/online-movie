import React, {PureComponent} from 'react';
import {TabName} from '../../const';
import MoviePropType from '../../prop-types/movie';
import TabList from '../tab-list/tab-list.jsx';
import MovieOverview from '../movie-overview/movie-overview.jsx';
import MovieDetails from '../movie-details/movie-details.jsx';
import MovieReviews from '../movie-reviews/movie-reviews.jsx';

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: TabName.OVERVIEW,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(tabName) {
    this.setState({
      activeTab: tabName
    });
  }

  render() {
    const {movie} = this.props;
    const {reviews} = movie;
    const {activeTab} = this.state;
    const tabNames = Object.values(TabName);

    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <TabList activeTab={activeTab} tabNames={tabNames} onTabClick={this.handleClick} />
        </nav>

        {activeTab === TabName.OVERVIEW && <MovieOverview movie={movie}/>}

        {activeTab === TabName.DETAILS && <MovieDetails movie={movie}/>}

        {activeTab === TabName.REVIEWS && <MovieReviews reviews={reviews}/>}
      </div>
    );
  }
}

Tabs.propTypes = {
  movie: MoviePropType.isRequired,
};

export default Tabs;
