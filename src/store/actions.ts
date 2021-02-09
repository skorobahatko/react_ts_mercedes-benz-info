import {
  Character,
  Location,
  Episode,
  CharactersWithInfo,
  LocationWithInfo,
  EpisodeWithInfo
} from "../models";

export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';
export const GET_ONE_CHARACTER = 'GET_ONE_CHARACTER';
export const GET_MULTIPLY_CHARACTERS = 'GET_MULTIPLY_CHARACTERS';
export const GET_FILTERED_CHARACTERS = 'GET_FILTERED_CHARACTERS';

const getAllCharacters = (info: CharactersWithInfo) => {
  return {
    type: GET_ALL_CHARACTERS,
    payload: info
  }
}
const getOneCharacter = (info: Character) => {
  return {
    type: GET_ONE_CHARACTER,
    payload: info
  }
}
const getMultiplyCharacters = (info: Character[]) => {
  return {
    type: GET_MULTIPLY_CHARACTERS,
    payload: info
  }
}
const getFilteredCharacters = (info: CharactersWithInfo) => {
  return {
    type: GET_FILTERED_CHARACTERS,
    payload: info
  }
}

export const characterActions = {
  getAllCharacters,
  getOneCharacter,
  getMultiplyCharacters,
  getFilteredCharacters
}

export const GET_ALL_LOCATIONS = 'GET_ALL_LOCATIONS';
export const GET_ONE_LOCATION = 'GET_ONE_LOCATION';
export const GET_MULTIPLY_LOCATIONS = 'GET_MULTIPLY_LOCATIONS';
export const GET_FILTERED_LOCATIONS = 'GET_FILTERED_LOCATIONS';

const getAllLocations = (info: LocationWithInfo) => {
  return {
    type: GET_ALL_LOCATIONS,
    payload: info
  }
}
const getOneLocation = (info: Location) => {
  return {
    type: GET_ONE_LOCATION,
    payload: info
  }
}
const getMultiplyLocations = (info: Location[]) => {
  return {
    type: GET_MULTIPLY_LOCATIONS,
    payload: info
  }
}
const getFilteredLocations = (info: LocationWithInfo) => {
  return {
    type: GET_FILTERED_LOCATIONS,
    payload: info
  }
}

export const locationActions = {
  getAllLocations,
  getOneLocation,
  getMultiplyLocations,
  getFilteredLocations
};

export const GET_ALL_EPISODES = 'GET_ALL_EPISODES';
export const GET_ONE_EPISODE = 'GET_ONE_EPISODE';
export const GET_MULTIPLY_EPISODES = 'GET_MULTIPLY_EPISODES';
export const GET_FILTERED_EPISODES = 'GET_FILTERED_EPISODES';

const getAllEpisodes = (info: EpisodeWithInfo) => {
  return {
    type: GET_ALL_EPISODES,
    payload: info
  }
}
const getOneEpisode = (info: Episode) => {
  return {
    type: GET_ONE_EPISODE,
    payload: info
  }
}
const getMultiplyEpisodes = (info: Episode[]) => {
  return {
    type: GET_MULTIPLY_EPISODES,
    payload: info
  }
}
const getFilteredEpisodes = (info: EpisodeWithInfo) => {
  return {
    type: GET_FILTERED_EPISODES,
    payload: info
  }
}

export const episodesActions = {
  getAllEpisodes,
  getOneEpisode,
  getMultiplyEpisodes,
  getFilteredEpisodes
};