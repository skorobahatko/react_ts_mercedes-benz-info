import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Character } from '../../models';

const CharacterSelfCard: React.FC<Character> = (props) => {
  const {id, name, image, status, species} = props;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={image}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Status: {status}<br/>
          Species: {species}
        </Card.Text>
        <Button variant='primary'><Link to={`/characters/${id}`}  style={{textDecoration: 'none', color: 'white'}}>Details</Link></Button>
      </Card.Body>
    </Card>
  )
}
export { CharacterSelfCard };