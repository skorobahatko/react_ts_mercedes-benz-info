import {
    GET_ALL_CHARACTERS,
    GET_ONE_CHARACTER,
    GET_MULTIPLY_CHARACTERS,
    GET_FILTERED_CHARACTERS,
    GET_ALL_LOCATIONS,
    GET_ONE_LOCATION,
    GET_MULTIPLY_LOCATIONS,
    GET_FILTERED_LOCATIONS,
    GET_ALL_EPISODES,
    GET_ONE_EPISODE,
    GET_MULTIPLY_EPISODES,
    GET_FILTERED_EPISODES
} from './actions';
import { combineReducers } from 'redux';
import {
  CharacterStore,
  allCharacterActionsType,
  LocationStore,
  allLocationActionsType,
  EpisodeStore,
  allEpisodeActionsType
} from '../models/interfaces';
const characterStore: CharacterStore = {}
const locationStore: LocationStore = {}
const episodeStore: EpisodeStore = {}

function charactersReducer (state = characterStore, action: allCharacterActionsType): CharacterStore {
  let updatedState = {...state};
  switch (action.type) {
    case GET_ALL_CHARACTERS:
      updatedState.allCharacters = action.payload;
      return updatedState;
    case GET_ONE_CHARACTER: 
      updatedState.oneCharacter = action.payload;
      return updatedState;
    case GET_MULTIPLY_CHARACTERS:
      updatedState.multiplyCharacters = action.payload;
      return updatedState;
    case GET_FILTERED_CHARACTERS:
      updatedState.filteredCharacters = action.payload;
      return updatedState;
    default: return updatedState;
  }
}
function locationReducer (state = locationStore, action: allLocationActionsType): LocationStore {
  let updatedState = {...state};
  switch (action.type) {
    case GET_ALL_LOCATIONS:
      updatedState.allLocations = action.payload;
      return updatedState;
    case GET_ONE_LOCATION: 
      updatedState.oneLocation = action.payload;
      return updatedState;
    case GET_MULTIPLY_LOCATIONS:
      updatedState.multiplyLocations = action.payload;
      return updatedState;
    case GET_FILTERED_LOCATIONS:
      updatedState.filteredLocations = action.payload;
      return updatedState;
    default: return updatedState;
  }
}
function episodeReducer (state = episodeStore, action: allEpisodeActionsType): EpisodeStore {
  let updatedState = {...state};
  switch (action.type) {
    case GET_ALL_EPISODES:
      updatedState.allEpisodes = action.payload;
      return updatedState;
    case GET_ONE_EPISODE: 
      updatedState.oneEpisode = action.payload;
      return updatedState;
    case GET_MULTIPLY_EPISODES:
      updatedState.multiplyEpisodes = action.payload;
      return updatedState;
    case GET_FILTERED_EPISODES:
      updatedState.filteredEpisodes = action.payload;
      return updatedState;
    default: return updatedState;
  }
}
const rootReducer = combineReducers({charactersReducer, locationReducer, episodeReducer})
export { rootReducer, charactersReducer };