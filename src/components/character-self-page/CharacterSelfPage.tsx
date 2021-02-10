import { useEffect } from "react";
import { useStore, useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom";
import { GlobalStore } from "../../models";
import { characterActions } from '../../store';
import { api } from '../../utils';
import { ApiRoutesEnum } from '../../models';

const CharacterSelfPage: React.FC = () => {
  const store = useStore();
  const dispatch = useDispatch();
  const location = useLocation();
  const existsCharacters: GlobalStore = store.getState();
  const { characters: {allCharacters} } = existsCharacters;
  const id = location.pathname.split('/')[location.pathname.split('/').length - 1];
  const isCharacterExists = allCharacters.results.find((el) => el.id === +id)

  useEffect(() => {
    async function fetchData() {
      const res = await api.getOneCharacter(`${ApiRoutesEnum.getCh}/${+id}`);
      if (res) {
        dispatch(characterActions.getOneCharacter(res));
      }
    }
    if (!allCharacters.results.length && !isCharacterExists) {
      fetchData();
    }
  }, [])
  const oneCharacter = useSelector((state: GlobalStore) => state.characters.oneCharacter);
  console.log(oneCharacter);
  const character = isCharacterExists ? isCharacterExists : oneCharacter;
  if (character.id === 0) {
    return (<div>wait</div>)
  }
  console.log(character)

  return (
    <div>self page of {character.name}</div>
  )
}
export { CharacterSelfPage };