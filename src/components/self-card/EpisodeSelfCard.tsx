import { Episode } from '../../models';

const EpisodeSelfCard: React.FC<Episode> = (props) => {
  const {id, name} = props;

  return (
    <li className="list-group-item">{name}</li>
  )
}
export { EpisodeSelfCard };