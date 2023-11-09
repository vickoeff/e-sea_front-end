import axios from 'axios'

const initAxios = axios.create({
    baseURL: "https://e-sea-backend-test.adaptable.app"
  });

export  default initAxios;