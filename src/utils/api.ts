import { CharactersWithInfo, Character,OneLocation, LocationWithInfo, Episode, EpisodeWithInfo } from './../models/interfaces';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ApiRoutesEnum } from '../models';

const apiInstance: AxiosInstance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api'
});

class api {
  static getAllCharacters = async (url: ApiRoutesEnum, page?: number) => {
      const response: AxiosResponse<CharactersWithInfo> = await apiInstance.get(url, {params: {page}})
      if (!response) {
        console.error('Someting goes wrong');
      }
      const { data } = response;
      return data;
  }
  static getOneCharacter = async (url: string) => {
    const response: AxiosResponse<Character> = await apiInstance.get(url)
    if (!response) {
      console.error('Someting goes wrong');
    }
    const { data } = response;
    return data;
  }
  static getMultiplyCharacters = async (url: string) => {
    const response: AxiosResponse<Character[]> = await apiInstance.get(url)
    if (!response) {
      console.error('Someting goes wrong');
    }
    const { data } = response;
    return data;
  }
  static getFilteredCharacters = async (url: string) => {
    const response: Promise<CharactersWithInfo> = new Promise((resolve, rejects) => {
      apiInstance.get(url).then((response) => {
        const { data } = response;
        if (data) {
          resolve(data)          
        }
      }).catch((error) => {
        if (error) {
          resolve({info: {count: 0, pages: 0, next: '', prev: ''}, results: []})
        }
      })
    })
    return response;
  }


  static getAllLocations = async (url: ApiRoutesEnum, page?: number) => {
    const response: AxiosResponse<LocationWithInfo> = await apiInstance.get(url, {params: {page}})
    if (!response) {
      console.error('Someting goes wrong');
    }
    const { data } = response;
    return data;
  }
  static getOneLocation = async (url: string) => {
    const response: AxiosResponse<OneLocation> = await apiInstance.get(url)
    if (!response) {
      console.error('Someting goes wrong');
    }
    const { data } = response;
    return data;
  }
  static getMultiplyLocations = async (url: string) => {
    const response: AxiosResponse<Location[]> = await apiInstance.get(url)
    if (!response) {
      console.error('Someting goes wrong');
    }
    const { data } = response;
    return data;
  }
  static getFilteredLocations = async (url: string) => {
    const response: Promise<LocationWithInfo> = new Promise((resolve, rejects) => {
      apiInstance.get(url).then((response) => {
        const { data } = response;
        if (data) {
          resolve(data)          
        }
      }).catch((error) => {
        if (error) {
          resolve({info: {count: 0, pages: 0, next: '', prev: ''}, results: []})
        }
      })
    })
    return response;
  }


  static getAllEpisodes = async (url: ApiRoutesEnum, page?: number) => {
    const response: AxiosResponse<EpisodeWithInfo> = await apiInstance.get(url, {params: {page}})
    if (!response) {
      console.error('Someting goes wrong');
    }
    const { data } = response;
    return data;
  }
  static getOneEpisode = async (url: string) => {
    const response: AxiosResponse<Episode> = await apiInstance.get(url)
    if (!response) {
      console.error('Someting goes wrong');
    }
    const { data } = response;
    return data;
  }
  static getMultiplyEpisodes = async (url: string) => {
    const response: AxiosResponse<Episode[] | Episode> = await apiInstance.get(url)
    if (!response) {
      console.error('Someting goes wrong');
    }
    const { data } = response;
    return data;
  }
  static getFilteredEpisodes = async (url: string) => {
    const response: Promise<EpisodeWithInfo> = new Promise((resolve, rejects) => {
      apiInstance.get(url).then((response) => {
        const { data } = response;
        if (data) {
          resolve(data)          
        }
      }).catch((error) => {
        if (error) {
          resolve({info: {count: 0, pages: 0, next: '', prev: ''}, results: []})
        }
      })
    })
    return response;
  }
}

export { api };