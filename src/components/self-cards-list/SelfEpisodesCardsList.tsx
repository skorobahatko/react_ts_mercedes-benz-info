import { Episode } from "../../models"
import { useEffect, useState } from 'react';
import { EpisodeWindow } from '../episode-self-window';
import { EpisodeSelfCard } from "../self-card";
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SelfEpisodesCardsList: React.FC<{arr: Episode[]}> = ({arr}) => {
  const [isEpisodeShowed, changeEpisodeStatus] = useState({show: false});
  const query = useQuery().get('name');
  useEffect(() => {
    if (query) {

      changeEpisodeStatus({show: true});
    }
  }, [query])
  console.log(query)
  return (
    <div className='d-flex justify-content-around'>
      <ul className="list-group">
        {arr.map((el, index) => {
          return (<EpisodeSelfCard {...el} key={index}/>)
        })}
      </ul>
      { isEpisodeShowed.show ?  <EpisodeWindow/> : <div className='container'>Choose some location to more info</div>}
    </div>
  )
}
export { SelfEpisodesCardsList };