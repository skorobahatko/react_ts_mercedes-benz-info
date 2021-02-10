import { Card } from 'react-bootstrap';
import { Character } from '../../models';

const CharacterSelfCard: React.FC<Character> = (props) => {
  const {id, name, image, status, species} = props;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={image}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Status: {status }
          Species: {species}
        </Card.Text>
        <Card.Link href={`/characters/${id}`}>more info</Card.Link>
      </Card.Body>
    </Card>
  )
}
export { CharacterSelfCard };