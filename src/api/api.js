import axios from "axios";
import {END_POINT, TIMEOUT, ServerError} from '../const';

const createAPI = (interceptors) => {
  const api = axios.create({
    baseURL: END_POINT,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onError = (error) => {
    const {response} = error;

    if (!response) {
      interceptors.handleNoResponse();
      throw error;
    }

    const {status} = response;

    switch (status) {
      case ServerError.UNAUTHORIZED:
        interceptors.handleUnauthorized();
        throw error;

      case ServerError.NOT_FOUND:
        interceptors.handleNotFound();
        throw error;

      case ServerError.BAD_REQUEST:
        interceptors.handleBadRequest();
        throw error;

      default:
        throw error;
    }
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};

export {createAPI};
