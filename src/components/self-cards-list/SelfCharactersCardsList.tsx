import { CardColumns } from "react-bootstrap";
import { Character } from "../../models"
import { CharacterSelfCard } from "../self-card/CharacterSelfCard";

const SelfCharactersCardsList: React.FC<{arr: Character[]}> = ({arr}) => {
  return (
    <CardColumns>
      {arr.map((el, index) => {
        return (<CharacterSelfCard {...el} key={index}/>)
      })}
    </CardColumns>
  )
}
export { SelfCharactersCardsList };