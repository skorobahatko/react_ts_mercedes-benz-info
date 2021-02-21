import {
    SET_ALL_CHARACTERS,
    SET_ONE_CHARACTER,
    SET_MULTIPLY_CHARACTERS,
    SET_FILTERED_CHARACTERS,
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
} from './actions';
import { combineReducers } from 'redux';
import {
  allCharacterActionsType,
  allLocationActionsType,
  allEpisodeActionsType,
  CharacterStore,
  LocationStore,
  EpisodeStore
} from '../models/interfaces';
import { globalStore } from './storeTemplates';

function charactersReducer (state = globalStore.characters, action: allCharacterActionsType): CharacterStore {
  let updatedState = {...state};
  switch (action.type) {
    case SET_ALL_CHARACTERS:
      updatedState.allCharacters = action.payload;
      return updatedState;
    case SET_ONE_CHARACTER: 
      updatedState.oneCharacter = action.payload;
      return updatedState;
    case SET_MULTIPLY_CHARACTERS:
      updatedState.multiplyCharacters = action.payload;
      return updatedState;
    case SET_FILTERED_CHARACTERS:
      updatedState.filteredCharacters = action.payload;
      return updatedState;
    case CHARACTERS_PAGE:
      updatedState.page = action.payload;
      return updatedState;
    default: return updatedState;
  }
}
function locationReducer (state = globalStore.location, action: allLocationActionsType): LocationStore {
  let updatedState = {...state};
  switch (action.type) {
    case SET_ALL_LOCATIONS:
      updatedState.allLocations = action.payload;
      return updatedState;
    case SET_ONE_LOCATION: 
      updatedState.oneLocation = action.payload;
      return updatedState;
    case SET_MULTIPLY_LOCATIONS:
      updatedState.multiplyLocations = action.payload;
      return updatedState;
    case SET_FILTERED_LOCATIONS:
      updatedState.filteredLocations = action.payload;
      return updatedState;
    case LOCATIONS_PAGE:
      updatedState.page = action.payload;
      return updatedState;
    default: return updatedState;
  }
}
function episodeReducer (state = globalStore.episode, action: allEpisodeActionsType): EpisodeStore {
  let updatedState = {...state};
  switch (action.type) {
    case SET_ALL_EPISODES:
      updatedState.allEpisodes = action.payload;
      return updatedState;
    case SET_ONE_EPISODE: 
      updatedState.oneEpisode = action.payload;
      return updatedState;
    case SET_MULTIPLY_EPISODES:
      updatedState.multiplyEpisodes = action.payload;
      return updatedState;
    case SET_FILTERED_EPISODES:
      updatedState.filteredEpisodes = action.payload;
      return updatedState;
    case EPISODES_PAGE:
      updatedState.page = action.payload;
      return updatedState;
    default: return updatedState;
  }
}
const rootReducer = combineReducers({characters: charactersReducer, location: locationReducer, episode: episodeReducer})
export { rootReducer };