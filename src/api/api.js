import axios from 'axios';
import {END_POINT, TIMEOUT, ServerCodes} from '../const.ts';

const createAPI = (handlers) => {
  const api = axios.create({
    baseURL: END_POINT,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onError = (error) => {
    const {response} = error;

    if (!response) {
      handlers.handleNoResponse();
      throw error;
    }

    const {status} = response;

    switch (status) {
      case ServerCodes.UNAUTHORIZED:
        handlers.handleUnauthorized();
        throw error;

      case ServerCodes.NOT_FOUND:
        handlers.handleNotFound();
        throw error;

      case ServerCodes.BAD_REQUEST:
        handlers.handleBadRequest();
        throw error;

      default:
        throw error;
    }
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};

export {createAPI};
