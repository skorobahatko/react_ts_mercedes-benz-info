import { Character } from '../../models';

const CarouselItem: React.FC<Character> = (character) => {
  const { name, image } = character;
  return (
    <div className={`carousel-item ${character.id === 1 ? 'active': ''}`}>
      <img src={image} className="d-block w-50" alt={name}/>
    </div>
  )
}
export { CarouselItem };