import { CardColumns } from "react-bootstrap";
import { Episode } from "../../models"
import { EpisodeSelfCard } from "../self-card";

const SelfEpisodesCardsList: React.FC<{arr: Episode[]}> = ({arr}) => {
  return (
    <ul className="list-group">
      {arr.map((el, index) => {
        return (<EpisodeSelfCard {...el} key={index}/>)
      })}
    </ul>
  )
}
export { SelfEpisodesCardsList };