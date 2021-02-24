import { useEffect } from "react";
import { useStore, useDispatch, useSelector } from "react-redux"
import { useLocation, Link } from "react-router-dom";
import { GlobalStore, Episode } from "../../models";
import { characterActions, episodesActions } from '../../store';
import { api } from '../../utils';
import { ApiRoutesEnum } from '../../models';
import { Header } from '../header';
import { CharactersSelect } from '../characters-select';

const CharacterSelfPage: React.FC = () => {
  const store = useStore();
  const dispatch = useDispatch();
  const uselocation = useLocation();
  const existsCharacters: GlobalStore = store.getState();
  const { characters: {allCharacters} } = existsCharacters;
  const id = uselocation.pathname.split('/')[uselocation.pathname.split('/').length - 1];
  const isCharacterExists = allCharacters.results.find((el) => el.id === +id)

  useEffect(() => {
    async function fetchData() {
      const res = await api.getOneCharacter(`${ApiRoutesEnum.getCh}/${+id}`);
      if (res) {
        const { episode } = res;

        if (episode.length) {
          const episodeList = getEpisodesPageList(episode);
          const episodeRes = await api.getMultiplyEpisodes(`${ApiRoutesEnum.getEp}/${episodeList}`)
            if ((episodeRes as Episode[]).length) {
              dispatch(episodesActions.setMultiplyEpisodes(episodeRes as Episode[]));
            }
            if ((episodeRes as Episode).id) {
              dispatch(episodesActions.setOneEpisode(episodeRes as Episode));
          }
        }

        dispatch(characterActions.setOneCharacter(res));
      }
    }
    fetchData();
  }, [])
  const oneCharacter = useSelector((state: GlobalStore) => state.characters.oneCharacter);
  const multiplyEpisodes = useSelector((state: GlobalStore) => state.episode.multiplyEpisodes);
  const oneEpisode = useSelector((state: GlobalStore) => state.episode.oneEpisode);
  const character = isCharacterExists ? isCharacterExists : oneCharacter;
  if (character.id === 0) {
    return (<div>wait</div>)
  }
  const { name, status, species, gender, origin, location, image } = character;

  function getPage (param: string) {
    return param.split('/')[param.split('/').length - 1]
  }
  function getEpisodesPageList (episodes: string[]) {
    return episodes.map((el) => getPage(el))
  }
  function isObject (obj:any) {
    if (typeof obj === 'object' && !obj.length && obj.length !== 0) {
      console.log(obj, '111111')
      return [obj];
    }    
    return obj;
  }

  return (
    <div className='container-fluid'>
      <Header/>
      <div className='container d-flex flex-direction-flex-start' style={{marginBottom: '15px'}}>
          <div>
            <h1>{name}</h1>
            <span>Status: {status} | <b>{species}</b></span>
            <p>Gender: <b>{gender}</b></p>
            <p>Origin: {
              origin.name !== 'unknown' ?
              <Link to={`/locations/page=1?id=${getPage(origin.url)}`}><b>{origin.name}</b></Link> : <b>{origin.name}</b>
            }
            </p>
            <p>Last know location: {
              location.name !== 'unknown' ?
              <Link to={`/locations/page=1?id=${getPage(location.url)}`}><b>{location.name}</b></Link> : <b>{location.name}</b>
            }
            </p>
                {
                  multiplyEpisodes.length ? 
                  <CharactersSelect {...multiplyEpisodes}/> : oneEpisode.id ? <CharactersSelect {...isObject(oneEpisode)}/> : <span>No episodes to show</span>
                }
          </div>  
        <div>
          <img src={image} alt="name" style={{borderRadius: '10px'}}/>
        </div>
      </div>
    </div>
  )
}
export { CharacterSelfPage };