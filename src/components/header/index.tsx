// import { useState } from 'react';
import * as React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useStore } from 'react-redux';
import logo from '../../images/skateboard.png';
import { api } from '../../utils';
import { getAllCharacters } from '../../store';
import './styles.scss';

const Header: React.FC = () => {
  // const [state, changeState] = useState();
  const dispatch = useDispatch();
  // const store = useStore();

  const loginHandler = async () => {
    const res = await api.getAll();
    dispatch(getAllCharacters(res.data));
    
    console.log(res);
  }
    return (
        <header>
          <div className='container'>
        <div className='header_left_side_container'>
          <img src={logo} alt='logo' className='logo_img'/>
        </div>
        <div className='header_right_side_container'>
          <Button 
            variant='outline-secondary' 
            type='submit' 
            onClick={loginHandler}
          >Login</Button>
        </div>
        </div>
      </header> 
    )
}
export default Header;