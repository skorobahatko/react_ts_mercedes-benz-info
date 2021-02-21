import {
  SET_ALL_CHARACTERS,
  SET_FILTERED_CHARACTERS,
  SET_MULTIPLY_CHARACTERS,
  SET_ONE_CHARACTER,
  SET_ALL_LOCATIONS,
  SET_ONE_LOCATION,
  SET_MULTIPLY_LOCATIONS,
  SET_FILTERED_LOCATIONS,
  SET_ALL_EPISODES,
  SET_ONE_EPISODE,
  SET_MULTIPLY_EPISODES,
  SET_FILTERED_EPISODES,
  EPISODES_PAGE,
  LOCATIONS_PAGE,
  CHARACTERS_PAGE
} from "../store/actions";

export interface GlobalStore {
  characters: CharacterStore,
  location: LocationStore,
  episode: EpisodeStore,
}

export interface CharacterStore {
  allCharacters: CharactersWithInfo,
  oneCharacter: Character,
  multiplyCharacters: Character[],
  filteredCharacters: CharactersWithInfo,
  page: number
};
export interface LocationStore {
  allLocations: LocationWithInfo,
  oneLocation: OneLocation,
  multiplyLocations: OneLocation[],
  filteredLocations: LocationWithInfo,
  page: number
}
export interface EpisodeStore {
  allEpisodes: EpisodeWithInfo,
  oneEpisode: Episode,
  multiplyEpisodes: Episode[],
  filteredEpisodes: EpisodeWithInfo,
  page: number
}
export type GetAll = CharactersWithInfo | LocationWithInfo | EpisodeWithInfo;
export type GetOne = Character | Location | Episode;
export type GetMultiply = Character[] | OneLocation[] | Episode[];
export type GetFiltered = CharactersWithInfo | LocationWithInfo | EpisodeWithInfo;

export enum ApiRoutesEnum {
  getCh = '/character',
  getLc = '/location',
  getEp = '/episode'
}

export interface CharactersWithInfo {
  info: Info,
  results: Character[]
}
export interface LocationWithInfo {
  info: Info,
  results: OneLocation[]
}
export interface EpisodeWithInfo {
  info: Info,
  results: Episode[]
}
interface Info {
  count: number,
  pages: number,
  next: string,
  prev: string
};
export interface Character {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string
  },
  location: {
    name: string,
    url: string
  },
  image: string,
  episode: string[],
  url: string,
  created: string
};
export interface OneLocation {
  id: number,
  name: string,
  type: string,
  dimension: string,
  residents: string[],
  url: string,
  created: string
}
export interface Episode {
  id: number,
  name: string,
  air_date: string,
  episode: string,
  characters: string[],
  url: string,
  created: string
}
export interface ApiRoutes {
  getCh?: string,
  getLc?: string,
  getEp?: string
}
interface getAllCharacters {
  type: typeof SET_ALL_CHARACTERS,
  payload: CharactersWithInfo
}
interface getOneCharacter {
  type: typeof SET_ONE_CHARACTER,
  payload: Character
}
interface getMultiplyCharacters {
  type: typeof SET_MULTIPLY_CHARACTERS,
  payload: Character[]
}
interface getFilteredCharacters {
  type: typeof SET_FILTERED_CHARACTERS,
  payload: CharactersWithInfo
}
interface getCharacterPage {
  type: typeof CHARACTERS_PAGE,
  payload: number
}
export type allCharacterActionsType = getAllCharacters | getOneCharacter | getMultiplyCharacters | getFilteredCharacters | getCharacterPage;

interface getAllLocations {
  type: typeof SET_ALL_LOCATIONS,
  payload: LocationWithInfo
}
interface getOneLocation {
  type: typeof SET_ONE_LOCATION,
  payload: OneLocation
}
interface getMultiplyLocations {
  type: typeof SET_MULTIPLY_LOCATIONS,
  payload: OneLocation[]
}
interface getFilteredLocations {
  type: typeof SET_FILTERED_LOCATIONS,
  payload: LocationWithInfo
}
interface getLocationPage {
  type: typeof LOCATIONS_PAGE,
  payload: number
}
export type allLocationActionsType = getAllLocations | getOneLocation | getMultiplyLocations | getFilteredLocations | getLocationPage;

interface getAllEpisodes {
  type: typeof SET_ALL_EPISODES,
  payload: EpisodeWithInfo
}
interface getOneEpisode {
  type: typeof SET_ONE_EPISODE,
  payload: Episode
}
interface getMultiplyEpisodes {
  type: typeof SET_MULTIPLY_EPISODES,
  payload: Episode[]
}
interface getFilteredEpisodes {
  type: typeof SET_FILTERED_EPISODES,
  payload: EpisodeWithInfo
}
interface getEpisodePage {
  type: typeof EPISODES_PAGE,
  payload: number
}
export type allEpisodeActionsType = getAllEpisodes | getOneEpisode | getMultiplyEpisodes | getFilteredEpisodes | getEpisodePage;