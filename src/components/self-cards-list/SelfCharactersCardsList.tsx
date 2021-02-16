import { CardColumns } from "react-bootstrap";
import { Character } from "../../models"
import './styles.scss';
import { CharacterSelfCard } from "../self-card/CharacterSelfCard";

const SelfCharactersCardsList: React.FC<{arr: Character[]}> = ({arr}) => {
  return (
    <div className='container-fluid'>
      <div className='container-for-cards'>
        {arr.map((el, index) => {
          return (<CharacterSelfCard {...el} key={index}/>)
        })}
      </div>
    </div>
  )
}
export { SelfCharactersCardsList };