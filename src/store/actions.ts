import {
  Character,
  Location,
  Episode,
  CharactersWithInfo,
  LocationWithInfo,
  EpisodeWithInfo
} from "../models";

export const SET_ALL_CHARACTERS = 'SET_ALL_CHARACTERS';
export const SET_ONE_CHARACTER = 'SET_ONE_CHARACTER';
export const SET_MULTIPLY_CHARACTERS = 'SET_MULTIPLY_CHARACTERS';
export const SET_FILTERED_CHARACTERS = 'SET_FILTERED_CHARACTERS';

const setAllCharacters = (info: CharactersWithInfo) => {
  return {
    type: SET_ALL_CHARACTERS,
    payload: info
  }
}
const setOneCharacter = (info: Character) => {
  return {
    type: SET_ONE_CHARACTER,
    payload: info
  }
}
const setMultiplyCharacters = (info: Character[]) => {
  return {
    type: SET_MULTIPLY_CHARACTERS,
    payload: info
  }
}
const setFilteredCharacters = (info: CharactersWithInfo) => {
  return {
    type: SET_FILTERED_CHARACTERS,
    payload: info
  }
}

export const characterActions = {
  setAllCharacters,
  setOneCharacter,
  setMultiplyCharacters,
  setFilteredCharacters
}

export const SET_ALL_LOCATIONS = 'SET_ALL_LOCATIONS';
export const SET_ONE_LOCATION = 'SET_ONE_LOCATION';
export const SET_MULTIPLY_LOCATIONS = 'SET_MULTIPLY_LOCATIONS';
export const SET_FILTERED_LOCATIONS = 'SET_FILTERED_LOCATIONS';

const setAllLocations = (info: LocationWithInfo) => {
  return {
    type: SET_ALL_LOCATIONS,
    payload: info
  }
}
const setOneLocation = (info: Location) => {
  return {
    type: SET_ONE_LOCATION,
    payload: info
  }
}
const setMultiplyLocations = (info: Location[]) => {
  return {
    type: SET_MULTIPLY_LOCATIONS,
    payload: info
  }
}
const setFilteredLocations = (info: LocationWithInfo) => {
  return {
    type: SET_FILTERED_LOCATIONS,
    payload: info
  }
}

export const locationActions = {
  setAllLocations,
  setOneLocation,
  setMultiplyLocations,
  setFilteredLocations
};

export const SET_ALL_EPISODES = 'SET_ALL_EPISODES';
export const SET_ONE_EPISODE = 'SET_ONE_EPISODE';
export const SET_MULTIPLY_EPISODES = 'SET_MULTIPLY_EPISODES';
export const SET_FILTERED_EPISODES = 'SET_FILTERED_EPISODES';

const setAllEpisodes = (info: EpisodeWithInfo) => {
  return {
    type: SET_ALL_EPISODES,
    payload: info
  }
}
const setOneEpisode = (info: Episode) => {
  return {
    type: SET_ONE_EPISODE,
    payload: info
  }
}
const setMultiplyEpisodes = (info: Episode[]) => {
  return {
    type: SET_MULTIPLY_EPISODES,
    payload: info
  }
}
const setFilteredEpisodes = (info: EpisodeWithInfo) => {
  return {
    type: SET_FILTERED_EPISODES,
    payload: info
  }
}

export const episodesActions = {
  setAllEpisodes,
  setOneEpisode,
  setMultiplyEpisodes,
  setFilteredEpisodes
};

export const CHARACTERS_PAGE = 'CHARACTERS_PAGE';
export const LOCATIONS_PAGE = 'LOCATIONS_PAGE';
export const EPISODES_PAGE = 'EPISODES_PAGE';

const charactersPage = (page: number) => {
  return {
    type: CHARACTERS_PAGE,
    payload: page
  }
}
const locationsPage = (page: number) => {
  return {
    type: CHARACTERS_PAGE,
    payload: page
  }
}
const episodesPage = (page: number) => {
  return {
    type: CHARACTERS_PAGE,
    payload: page
  }
}
export const allPages = {
  charactersPage,
  locationsPage,
  episodesPage
}