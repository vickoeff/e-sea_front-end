import axios from 'axios'

const initAxios = axios.create({
    baseURL: "https://e-sea-backend2.adaptable.app/"
  });

export  default initAxios;