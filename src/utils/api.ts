import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ApiRoutes, CharactersWithInfo } from '../models';
// import config from '../config';

const apiInstance: AxiosInstance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api'
});

const apiRoutes: ApiRoutes = {
  getCh: '/character',
  getLc: '/location',
  getEp: '/episode'
}

class api {
  static getAll = async () => {
    const response: AxiosResponse<CharactersWithInfo> = await apiInstance.get(apiRoutes.getCh)
    if (!response) {
      console.error('Someting goes wrong');
    }
    return response;
  }
}

export { api };