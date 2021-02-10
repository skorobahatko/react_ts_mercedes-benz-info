import { Card } from 'react-bootstrap';
import { Location } from '../../models';

const LocationSelfCard: React.FC<Location> = (props) => {
  const {id, name} = props;

  return (
    <li className="list-group-item">{name}</li>
  )
}
export { LocationSelfCard };