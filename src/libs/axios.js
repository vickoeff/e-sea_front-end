import axios from 'axios'
import config from "../config";

const initAxios = axios.create({
    baseURL: config.baseApiUrl
  });

export  default initAxios;