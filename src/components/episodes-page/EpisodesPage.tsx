import { useEffect } from 'react';
import { SelfEpisodesCardsList } from '../self-cards-list';
import { ApiRoutesEnum, GlobalStore } from '../../models';
import { api } from '../../utils';
import { episodesActions } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Header } from '../header';


const EpisodesCardsPage: React.FC = () => {
  const dispatch = useDispatch();

  const allEpisodes = useSelector((state: GlobalStore) => state.episode.allEpisodes);
  const totalPages = useSelector((state: GlobalStore) => state.episode.allEpisodes.info.pages);
  // const pageFromStore = useSelector((state: GlobalStore) => state.characters.page);
  const location = useLocation();
  
  const currentPage = +location.pathname.split('page=')[1];
  // const isPageNeedToReload = pageFromStore === currentPage ? false : true
  console.log(location);


  useEffect(() => {
    async function fetchData() {
      const res = await api.getAllEpisodes(ApiRoutesEnum.getEp, currentPage);

      if (res) {
        dispatch(episodesActions.setAllEpisodes(res));
      }
    }
    if (!allEpisodes.results.length) {
      fetchData();
    }
  }, [currentPage])

  if (!allEpisodes.results.length) {
    return (
      <div className="spinner-border" role="status">

      </div>
    )
  }

  return (
    <div className = 'container-fluid'>
      <Header/>
        <SelfEpisodesCardsList arr={allEpisodes.results}/>
        <Pagination>
          <Pagination.First href={`/episodes/page=1`}/>
          <Pagination.Prev href={`/episodes/page=${(currentPage - 1) === 0 ? currentPage : currentPage - 1}`}/>
          <Pagination.Item active>{currentPage}</Pagination.Item>
          <Pagination.Next href={`/episodes/page=${currentPage + 1}`}/>
          <Pagination.Last href={`/episodes/page=${totalPages}`}/>
        </Pagination>
    </div>
  )
}
export { EpisodesCardsPage };