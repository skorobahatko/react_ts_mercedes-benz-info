import './styles.scss';
import { Header } from '../header/Header';
import { useEffect } from 'react';
import { ApiRoutesEnum, GlobalStore } from '../../models';
import { api } from '../../utils';
import { characterActions } from '../../store';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';


export const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  const allCharacters = useSelector((state: GlobalStore) => state.characters.allCharacters);
  const location = useLocation();
  
  const currentPage = +location.pathname.split('page=')[1];
  console.log(location);


  useEffect(() => {
    async function fetchData() {
      const res = await api.getAllCharacters(ApiRoutesEnum.getCh, currentPage);

      if (res) {
        dispatch(characterActions.setAllCharacters(res));
      }
    }
    if (!allCharacters.results.length) {
      fetchData();
    }
  }, [])

  if (!allCharacters.results.length) {
    return (
      <div className="spinner-border" role="status">

      </div>
    )
  }
  return (
    <div className='container-fluid'>
      <Header/>
      <div className='container'>
        <div className='left-side-container'>
          <h1>Welcome to Rick and Morty encyclopedia</h1>
        </div>
        <div className='right-side-container'>
          <span>There is some information about Rick and Morty serial,<br/>what u can find in internet, but:</span>
          <p>There is all characters: <Link to='/characters'>Characters</Link></p>
          <p>There is all locations: <Link to='/locations'>Locations</Link></p>
          <p>There is all episodes: <Link to='/episodes'>Episodes</Link></p>
          
        </div>
      </div> 
    </div>
  )
}