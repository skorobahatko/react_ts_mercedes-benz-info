import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { OneLocation } from '../../models';
import { locationActions } from '../../store';

const LocationSelfCard: React.FC<OneLocation> = (props) => {
  const {id, name} = props;
  const baseUrl = useLocation();
  const dispatch = useDispatch();
  const onClickDispatch = () => {
    dispatch(locationActions.setOneLocation(props));
  }

  return (
    <li className="list-group-item"><Link to={`${baseUrl.pathname}?id=${id}`} onClick={onClickDispatch}>{name}</Link></li>
  )
}
export { LocationSelfCard };