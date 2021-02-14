import { Carousel, CarouselItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ApiRoutesEnum, GlobalStore } from '../../models';
import { useEffect } from "react";
import { api } from "../../utils";
import { useLocation, Link } from 'react-router-dom';
import { characterActions, locationActions } from '../../store';
import { SelfCharactersCardsList } from "../self-cards-list";

const useQuery = () => new URLSearchParams(useLocation().search)

const LocationWindow: React.FC = () => {

  const url = useQuery().get('id');
  const dispatch = useDispatch();
  const location = useSelector((state: GlobalStore) => state.location.oneLocation);
  const locationResidents = useSelector((state: GlobalStore) => state.characters.multiplyCharacters);

  useEffect(() => {
    async function fetchLocationData() {
      const res = await api.getOneLocation(`${ApiRoutesEnum.getLc}/${url}`);
      const residentsForRequest = res.residents.map((el) => {
        return el.split('/character/')[1];
      })
      const residentsRes = await api.getMultiplyCharacters(`${ApiRoutesEnum.getCh}/${residentsForRequest}`)
      
      if (res) {
        dispatch(locationActions.setOneLocation(res));
      }
      if (residentsRes) {
        dispatch(characterActions.setMultiplyCharacters(residentsRes));
      }
    }
    fetchLocationData();
  }, [url])
  const { name, type, dimension } = location;

  if (!location.id) {
    return (
      <div>Loading</div>
      )     
  }

  return (
    <div className='container'>
      <div>
        <h1>{name}</h1>
        <span>Type: {type}<br/>Dimension: {dimension}<br/></span>
        {/* <div className='container d-flex'> */}
        <Carousel fade={true} slide={false}>
      {
        locationResidents && locationResidents.length ? locationResidents.map((el, index) => {
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
      {/* </div> */}
      </div>

      {/* <SelfCharactersCardsList arr={locationResidents}/> */}
    </div>
  )
}
export { LocationWindow };