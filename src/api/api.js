import axios from "axios";
import {END_POINT, TIMEOUT, ServerError} from '../const';

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
      case ServerError.UNAUTHORIZED:
        handlers.handleUnauthorized();
        throw error;

      case ServerError.NOT_FOUND:
        handlers.handleNotFound();
        throw error;

      case ServerError.BAD_REQUEST:
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
