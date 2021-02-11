import { Link } from 'react-router-dom';
import { Location } from '../../models';

const LocationSelfCard: React.FC<Location> = (props) => {
  const {name} = props;

  return (
    <li className="list-group-item"><Link to={`/locations/?name=${name}`}>{name}</Link></li>
  )
}
export { LocationSelfCard };