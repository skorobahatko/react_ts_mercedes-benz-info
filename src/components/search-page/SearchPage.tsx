import { Form, Button, ListGroup } from 'react-bootstrap';
import { api } from '../../utils';
import { Header } from '../header';
import { ApiRoutesEnum, GlobalStore } from '../../models';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { characterActions, locationActions, episodesActions } from '../../store';

const SearchPage = () => {  
  const dispatch = useDispatch();
  async function getCharacters (value: string) {
    const res = await api.getFilteredCharacters(`${ApiRoutesEnum.getCh}?name=${value}`)
    if (res && res.results.length) {
        console.log(res)
      dispatch(characterActions.setFilteredCharacters(res));
    }
  }
  async function getLocations (value: string) {
    const res = await api.getFilteredLocations(`${ApiRoutesEnum.getLc}?name=${value}`)
    if (res && res.results.length) {
      dispatch(locationActions.setFilteredLocations(res));
    }
  }
  async function getEpisodes (value: string) {
    const res = await api.getFilteredEpisodes(`${ApiRoutesEnum.getEp}?name=${value}`)
    if (res && res.results.length) {
      dispatch(episodesActions.setFilteredEpisodes(res));
    }
  }
  const characters = useSelector((state: GlobalStore) => state.characters.filteredCharacters.results);
  const loctions = useSelector((state: GlobalStore) => state.location.filteredLocations.results);
  const episodes = useSelector((state: GlobalStore) => state.episode.filteredEpisodes.results);
  const submitForm = async (event: any) => {
    event.preventDefault();
    if (event) {
        console.log(event)
      await getCharacters(event);
    }
  }
  return(
    <div className='container-fluid'>
      <Header/>
      <Form inline>
        <div className='main-search-input-container'>
          <Form.Control type="text" placeholder="Search somethink" className="mr-sm-2" size='lg' onSubmit={submitForm}/>
          <Button variant="outline-info" type='submit'>Search</Button>
        </div>   
      </Form> 
      <div className='container'>
        <div>
          <h2>Characters from search: </h2>
          <ListGroup>
          { 
            characters && characters.length ? 
              characters.map((el) => {
                  return(
                    <ListGroup.Item>
                      {el.name}
                    </ListGroup.Item>
                  )
              }) : <span>there is no characters :(</span>
          }
          </ListGroup>
        </div>
      </div>
    </div>
  )
}
export { SearchPage };