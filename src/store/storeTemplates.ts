import {CharacterStore, LocationStore, EpisodeStore, GlobalStore} from '../models';

const characterStore: CharacterStore = {
    allCharacters: {
      info: {
        count: 0,
        pages: 0,
        next: '',
        prev: ''
      },
      results: []
    },
    oneCharacter: {
      id: 0,
      name: '',
      status: '',
      species: '',
      type: '',
      gender: '',
      origin: {
        name: '',
        url: ''
      },
      location: {
        name: '',
        url: ''
      },
      image: '',
      episode: [],
      url: '',
      created: ''
    },
    multiplyCharacters: [],
    filteredCharacters: {
      info: {
        count: 0,
        pages: 0,
        next: '',
        prev: ''
      },
      results: []
    },
    page: 1,
  }
  const locationStore: LocationStore = {
    allLocations: {
      info: {
        count: 0,
        pages: 0,
        next: '',
        prev: ''
      },
      results: []
    },
    oneLocation: {
      id: 0,
      name: '',
      type: '',
      dimension: '',
      residents: [],
      url: '',
      created: ''
    },
    multiplyLocations: [],
    filteredLocations: {
      info: {
        count: 0,
        pages: 0,
        next: '',
        prev: ''
      },
      results: []
    },
    page: 1,
  }
  const episodeStore: EpisodeStore = {
    allEpisodes: { 
      info: {
        count: 0,
        pages: 0,
        next: '',
        prev: ''
      },
      results: []
    },
    oneEpisode: {
      id: 0,
      name: '',
      air_date: '',
      episode: '',
      characters: [],
      url: '',
      created: ''
    },
    multiplyEpisodes: [],
    filteredEpisodes: {
      info: {
        count: 0,
        pages: 0,
        next: '',
        prev: ''
      },
      results: []
    },
    page: 1,
  }

  const globalStore: GlobalStore = {
    characters: characterStore,
    location: locationStore,
    episode: episodeStore
  }
  export {globalStore}