import { CharactersWithInfo } from "../models";

export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';
export const GET_ONE_CHARACTER = 'GET_ONE_CHARACTER';
export const GET_MULTIPLY_CHARACTERS = 'GET_MULTIPLY_CHARACTERS';
export const GET_FILTERED_CHARACTERS = 'GET_FILTERED_CHARACTERS';

export const getAllCharacters = (info: CharactersWithInfo) => {
  return {
    type: GET_ALL_CHARACTERS,
    payload: info
  }
}

const getAllLocations = 'GET_ALL_LOCATIONS';
const getOneLocation = 'GET_ONE_LOCATION';
const getMultiplyLocations = 'GET_MULTIPLY_LOCATIONS';
const getFilteredLocations = 'GET_FILTERED_LOCATIONS';

export const allLocationActions = {};

const getAllEpisodes = 'GET_ALL_EPISODES';
const getOneEpisode = 'GET_ONE_EPISODE';
const getMultiplyEpisodes = 'GET_MULTIPLY_EPISODES';
const getFilteredEpisodes = 'GET_FILTERED_EPISODES';

export const allEpisodesActions = {};