import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { OneLocation } from "../../models"
import { LocationWindow } from "../location-self-window";
import { LocationSelfCard } from "../self-card";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SelfLocationsCardsList: React.FC<{arr: OneLocation[]}> = ({arr}) => {
  const [isLocationShowed, changeLocationStatus] = useState({show: false});
  const query = useQuery().get('id');
  useEffect(() => {
    if (query) {

      changeLocationStatus({show: true});
    }
  }, [query])

  return (
      <div className='d-flex justify-content-around'>
        <ul className="list-group">
          {arr.map((el, index) => {
            return (<LocationSelfCard {...el} key={index}/>)
          })}
        </ul>
        { isLocationShowed.show ?  <LocationWindow/> : <div className='container'>Choose some location to more info</div>}
      </div>
  )
}
export { SelfLocationsCardsList };