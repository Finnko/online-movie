import NameSpace from '../../name-space';

const NAME_SPACE = NameSpace.COMMENTS;

const getLoadingStatus = (state) => state[NAME_SPACE].loading;

const getErrorStatus = (state) => state[NAME_SPACE].error;

const getOnceLoadedStatus = (state) => state[NAME_SPACE].onceLoaded;

const getComments = (state) => state[NAME_SPACE].comments;

export {
  getLoadingStatus,
  getErrorStatus,
  getOnceLoadedStatus,
  getComments,
};
