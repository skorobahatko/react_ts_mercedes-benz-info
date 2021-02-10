import { useEffect } from 'react';
import { SelfLocationsCardsList } from '../self-cards-list';
import { ApiRoutesEnum, GlobalStore } from '../../models';
import { api } from '../../utils';
import { locationActions } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';


const LocationsCardsPage: React.FC = () => {
  const dispatch = useDispatch();

  const allLocations = useSelector((state: GlobalStore) => state.location.allLocations);
  const totalPages = useSelector((state: GlobalStore) => state.location.allLocations.info.pages);
  // const pageFromStore = useSelector((state: GlobalStore) => state.characters.page);
  const location = useLocation();
  console.log(allLocations);
  
  const currentPage = +location.pathname.split('page=')[1];
  // const isPageNeedToReload = pageFromStore === currentPage ? false : true
  console.log(location);


  useEffect(() => {
    async function fetchData() {
      const res = await api.getAllLocations(ApiRoutesEnum.getLc, currentPage);

      if (res) {
        dispatch(locationActions.getAllLocations(res));
      }
    }
    if (!allLocations.results.length) {
      fetchData();
    }
  }, [currentPage])

  if (!allLocations.results.length) {
    return (
      <div className="spinner-border" role="status">

      </div>
    )
  }

  return (
    <div className = 'container-fluid'>
        <SelfLocationsCardsList arr={allLocations.results}/>
        <Pagination>
          <Pagination.First href={`/locations/page=1`}/>
          <Pagination.Prev href={`/locations/page=${(currentPage - 1) === 0 ? currentPage : currentPage - 1}`}/>
          <Pagination.Item active>{currentPage}</Pagination.Item>
          <Pagination.Next href={`/locations/page=${currentPage + 1}`}/>
          <Pagination.Last href={`/locations/page=${totalPages}`}/>
        </Pagination>
    </div>
  )
}
export { LocationsCardsPage };