import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Episode } from '../../models';

const CharactersSelect: React.FC<Episode[]> = (episodes) => {
    console.log(episodes)
  return(
      <Dropdown>
          <Dropdown.Toggle variant='success' id='dropdown-basic'>
              Episodes
          </Dropdown.Toggle>
    <Dropdown.Menu>
        {
          Object.values(episodes).map((el, index) => {
            return(<Dropdown.Item key={index}><Link to={`/episodes/page=1?id=${el.id}`}>{el.name} | {el.episode}</Link></Dropdown.Item>)
        })}
    </Dropdown.Menu>
    </Dropdown>
  )
}
export { CharactersSelect };