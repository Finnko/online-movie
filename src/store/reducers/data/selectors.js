import {createSelector} from "reselect";
import NameSpace from '../../name-space';
import {getSortedOffers} from '../../../utils/sorting';


const getOffers = (state) => state[NameSpace.DATA].offers;

const getCurrentCity = (state) => state[NameSpace.DATA].currentCity;

const getCitiesList = (state) => state[NameSpace.DATA].cities;

const getActiveSortType = (state) => state[NameSpace.DATA].sortType;

const getMoviesByGenre = createSelector(
  [getCurrentCity, getActiveSortType, getOffers],
  (activeCity, activeSortType, offers) => {
    const filteredOffers = offers.filter((offer) => offer.city.name === activeCity.name);

    return getSortedOffers(filteredOffers, activeSortType);
  }
);

export {getCurrentCity, getCitiesList};
