import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ApiRoutesEnum, GlobalStore } from '../../models';
import { useEffect } from "react";
import { api } from "../../utils";
import { useLocation, Link } from 'react-router-dom';
import { characterActions, episodesActions } from '../../store';

const useQuery = () => new URLSearchParams(useLocation().search)

const EpisodeWindow: React.FC = () => {

  const url = useQuery().get('id');
  const dispatch = useDispatch();
  const oneEpisode = useSelector((state: GlobalStore) => state.episode.oneEpisode);
  const episodeCharacters = useSelector((state: GlobalStore) => state.characters.multiplyCharacters);

  useEffect(() => {
    async function fetchLocationData() {
      const res = await api.getOneEpisode(`${ApiRoutesEnum.getEp}/${url}`);
      const residentsForRequest = res.characters.map((el) => {
        return el.split('/character/')[1];
      })
      const residentsRes = await api.getMultiplyCharacters(`${ApiRoutesEnum.getCh}/${residentsForRequest}`)
      
      if (res) {
        dispatch(episodesActions.setOneEpisode(res));
      }
      if (residentsRes) {
        dispatch(characterActions.setMultiplyCharacters(residentsRes));
      }
    }
    fetchLocationData();
  }, [url])
  const { name, air_date, episode } = oneEpisode;

  if (!oneEpisode.id) {
    return (
      <div>Loading</div>
      )     
  }

  return (
    <div className='container'>
      <div>
        <h1>{name}</h1>
        <span>Air date: {air_date}<br/>Episode: {episode}<br/></span>
        <Carousel fade={true} slide={false}>
        {
          episodeCharacters && episodeCharacters.length ? episodeCharacters.map((el, index) => {
            return (
              <Carousel.Item>
                <img src={el.image} alt={el.name} key={index}/>
                <Carousel.Caption>
                  <Link to={`/characters/${el.id}`} style={{textDecoration: 'none', color: 'white'}}><h3>{el.name}</h3></Link>
                </Carousel.Caption>
              </Carousel.Item>
            )
          }) : <span>There is no residents</span>
        }
      </Carousel>
      </div>
    </div>
  )
}
export { EpisodeWindow };