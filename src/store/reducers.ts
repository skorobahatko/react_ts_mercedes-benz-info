import {
    GET_ALL_CHARACTERS,
    GET_ONE_CHARACTER,
    GET_MULTIPLY_CHARACTERS,
    GET_FILTERED_CHARACTERS
} from './actions';
import { combineReducers } from 'redux';
import { Store, allCharacterActionsType } from '../models/interfaces';
const initialState: Store = {
  characters: {
    allCharacters: {
      info: {
        count: 0,
        pages: 0,
        next: '',
        prev: ''
      },
      results: []
    }
  }
}

function charactersReducer (state: typeof initialState = initialState, action: allCharacterActionsType) {
  let updatedState = {...state};
  switch (action.type) {
    case GET_ALL_CHARACTERS:
      state.characters.allCharacters = action.payload;
      return state;
    // case GET_ONE_CHARACTER: return state.characters.oneCharacter = action.payload;
    // case GET_MULTIPLY_CHARACTERS: return state.characters.multiplyCharacters = action.payload;
    // case GET_FILTERED_CHARACTERS: return state.characters.filteredCharacters = action.payload;
    default: return state;
  }
}
const rootReducer = combineReducers({charactersReducer})
export { rootReducer, charactersReducer };