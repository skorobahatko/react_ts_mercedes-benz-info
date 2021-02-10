import { CardColumns } from "react-bootstrap";
import { Location } from "../../models"
import { LocationSelfCard } from "../self-card";

const SelfLocationsCardsList: React.FC<{arr: Location[]}> = ({arr}) => {
  return (
    <ul className="list-group">
      {arr.map((el, index) => {
        return (<LocationSelfCard {...el} key={index}/>)
      })}
    </ul>
  )
}
export { SelfLocationsCardsList };