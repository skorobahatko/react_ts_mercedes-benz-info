import { Link } from 'react-router-dom';
import { Episode } from '../../models';

const EpisodeSelfCard: React.FC<Episode> = (props) => {
  const {id, name} = props;

  return (
    <li className="list-group-item"><Link to={`/episodes/page=2?name=${name}`}>{name}</Link></li>
  )
}
export { EpisodeSelfCard };