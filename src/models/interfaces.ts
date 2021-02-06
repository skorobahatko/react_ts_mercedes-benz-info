import {
  GET_ALL_CHARACTERS,
  GET_FILTERED_CHARACTERS,
  GET_MULTIPLY_CHARACTERS,
  GET_ONE_CHARACTER
} from "../store/actions";

export interface Store {
  characters?: {
    allCharacters?: CharactersWithInfo,
    oneCharacter?: Character,
    multiplyCharacters?: Character[],
    filteredCharacters?: CharactersWithInfo
  }
};
export interface CharactersWithInfo {
  info?: Info,
  results?: Character[]
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
export interface ApiRoutes {
  getCh: string,
  getLc: string,
  getEp: string
}
export type allCharacterActionsType = getAllCharacters | getOneCharacter | getMultiplyCharacters | getFilteredCharacters;
interface getAllCharacters {
  type: typeof GET_ALL_CHARACTERS,
  payload: CharactersWithInfo
}
interface getOneCharacter {
  type: typeof GET_ONE_CHARACTER,
  payload: Character
}
interface getMultiplyCharacters {
  type: typeof GET_MULTIPLY_CHARACTERS,
  payload: Character[]
}
interface getFilteredCharacters {
  type: typeof GET_FILTERED_CHARACTERS,
  payload: CharactersWithInfo
}