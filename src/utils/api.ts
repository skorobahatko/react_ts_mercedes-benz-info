import { CharactersWithInfo, LocationWithInfo } from './../models/interfaces';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ApiRoutesEnum, GetAll, GetOne, GetMultiply, GetFiltered } from '../models';
// import config from '../config';

const apiInstance: AxiosInstance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api'
});

class api {
  static getAll = async (url: ApiRoutesEnum) => {
    const response: AxiosResponse<CharactersWithInfo | LocationWithInfo> = await apiInstance.get(url)
    if (!response) {
      console.error('Someting goes wrong');
    }
    const { data } = response;
    return data;
  }
  static getOne = async (url: string) => {
    const response: AxiosResponse<GetOne> = await apiInstance.get(url)
    if (!response) {
      console.error('Someting goes wrong');
    }
    return response;
  }
  static getMultiply = async (url: string) => {
    const response: AxiosResponse<GetMultiply> = await apiInstance.get(url)
    if (!response) {
      console.error('Someting goes wrong');
    }
    return response;
  }
  static getFiltered = async (url: string) => {
    const response: AxiosResponse<GetFiltered> = await apiInstance.get(url)
    if (!response) {
      console.error('Someting goes wrong');
    }
    return response;
  }
}

export { api };