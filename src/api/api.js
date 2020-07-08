import axios from "axios";
import {END_POINT, TIMEOUT} from '../const';

const createAPI = () => {
  return axios.create({
    baseURL: END_POINT,
    timeout: TIMEOUT,
    withCredentials: true,
  });
};

export {createAPI};
