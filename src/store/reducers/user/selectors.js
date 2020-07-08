import NameSpace from '../../name-space';

const NAME_SPACE = NameSpace.USER;

const getLoadingStatus = (state) => state[NAME_SPACE].loading;

const getErrorStatus = (state) => state[NAME_SPACE].error;

export {getLoadingStatus, getErrorStatus};
