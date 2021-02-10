// import { useState } from 'react';
import * as React from 'react';
import { Button } from 'react-bootstrap';
import logo from '../../images/skateboard.png';
import './styles.scss';
// import { AxiosResponse } from 'axios';

const Header: React.FC = () => {
  // const [state, changeState] = useState();

  const loginHandler = async () => {

    console.log('work header')
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
export { Header };