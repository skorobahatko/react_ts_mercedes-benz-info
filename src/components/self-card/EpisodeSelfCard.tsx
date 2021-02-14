import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Episode } from '../../models';
import { episodesActions } from '../../store';

const EpisodeSelfCard: React.FC<Episode> = (props) => {
  const {id, name} = props;
  const baseUrl = useLocation();
  const dispatch = useDispatch();
  const onClickDispatch = () => {
    dispatch(episodesActions.setOneEpisode(props));
  }

  return (
    <li className="list-group-item"><Link to={`${baseUrl.pathname}?id=${id}`} onClick={onClickDispatch}>{name}</Link></li>
  )
}
export { EpisodeSelfCard };