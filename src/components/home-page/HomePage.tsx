import './styles.scss';
import { Header } from '../header/Header';
import { useEffect } from 'react';
import { ApiRoutesEnum, GlobalStore } from '../../models';
import { api } from '../../utils';
import { characterActions } from '../../store';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';


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
        dispatch(characterActions.getAllCharacters(res));
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
      <main>
        <div className='main_first_path_container'>
          <div className='header_and_description_container'>
            <div>
              <span>
                {/* by props */}
                Main Header
              </span>
            </div>
            <div>
              <span>
                {/* by props */}
              Description
              </span>
            </div>
          </div>
        </div>
        <div className='main_second_path_container'>
          <div className='select_container'>
            select
          </div>
        </div>
      </main>
      <footer>
        <div className='footer_main_container'>

        </div>
      </footer>
    </div>
  )
}