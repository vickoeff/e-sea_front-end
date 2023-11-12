import axios from 'axios'
import config from '../config'
import store from '../store'

const initAxios = axios.create({
  baseURL: config.baseApiUrl
})

initAxios.interceptors.request.use((config) => {
  store.commit('loading/setLoading', true)
  return config
})

initAxios.interceptors.response.use(
  (res) => {
    store.commit('loading/setLoading', false)
    return Promise.resolve(res)
  },
  (err) => {
    store.commit('loading/setLoading', false)
    return Promise.reject(err)
  }
)

export default initAxios
