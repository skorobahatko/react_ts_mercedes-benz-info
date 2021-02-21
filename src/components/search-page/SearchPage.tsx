import { Form, Button, ListGroup } from 'react-bootstrap';
import { api } from '../../utils';
import { Header } from '../header';
import { ApiRoutesEnum, GlobalStore } from '../../models';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { characterActions, locationActions, episodesActions } from '../../store';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const SearchPage = () => {  
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  async function getCharacters (value: string) {
    const res = await api.getFilteredCharacters(`${ApiRoutesEnum.getCh}?name=${value}`)
    if (res && res.results) {
        console.log(res)
      dispatch(characterActions.setFilteredCharacters(res));
    }
  }
  async function getLocations (value: string) {
    const res = await api.getFilteredLocations(`${ApiRoutesEnum.getLc}?name=${value}`)
    if (res && res.results) {
      dispatch(locationActions.setFilteredLocations(res));
    }
  }
  async function getEpisodes (value: string) {
    const res = await api.getFilteredEpisodes(`${ApiRoutesEnum.getEp}?name=${value}`)
    if (res && res.results) {
      dispatch(episodesActions.setFilteredEpisodes(res));
    }
  }
  let characters = useSelector((state: GlobalStore) => state.characters.filteredCharacters.results);
  let locations = useSelector((state: GlobalStore) => state.location.filteredLocations.results);
  let episodes = useSelector((state: GlobalStore) => state.episode.filteredEpisodes.results);
  const submitForm = async (event: React.FormEvent) => {
      event.preventDefault();
      if (inputRef && inputRef.current) {
        await getCharacters(inputRef.current.value);
        await getLocations(inputRef.current.value);
        await getEpisodes(inputRef.current.value);
      }
  }
  return(
    <div className='container-fluid'>
      <Header/>
      <Form inline onSubmit={submitForm}>
        <div className='main-search-input-container'>
          <Form.Control type="text" placeholder="Search somethink" className="mr-sm-2" size='lg' ref={inputRef}/>
          <Button variant="outline-info" type='submit'>Search</Button>
        </div>   
      </Form> 
      <div className='container'>
        <div>
          <h2>Characters from search: </h2>
          <ListGroup>
          { 
            characters && characters.length ? 
              characters.map((el, index) => {
                  return(
                    <ListGroup.Item key={index}>
                      <Link to={`/characters/${el.id}`}>{el.name}</Link>
                    </ListGroup.Item>
                  )
              }) : <span>there is no characters :(</span>
          }
          </ListGroup>
        </div>
        <div>
          <h2>Locations from search: </h2>
          <ListGroup>
          {
            locations && locations.length ? 
              locations.map((el, index) => {
                  return(
                    <ListGroup.Item key={index}>
                      <Link to={`/locations/page=1?id=${el.id}`}>{el.name}</Link>
                    </ListGroup.Item>
                  )
              }) : <span>there is no locations :(</span>
          }
          </ListGroup>
        </div>
        <div>
          <h2>Episodes from search: </h2>
          <ListGroup>
          { 
            episodes && episodes.length ? 
              episodes.map((el, index) => {
                  return(
                    <ListGroup.Item key={index}>
                      <Link to={`/episodes/page=1?id=${el.id}`}>{el.name}</Link>
                    </ListGroup.Item>
                  )
              }) : <span>there is no episodes :(</span>
          }
          </ListGroup>
        </div>
      </div>
    </div>
  )
}
export { SearchPage };