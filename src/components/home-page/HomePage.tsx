import './styles.scss';
import { Header } from '../header/Header';

export const HomePage: React.FC = () => {
  return (
    <div className='container-fluid'>
      <Header/>
      <main>
        <div className='main_first_path_container'>
          <div className='slider_container'>
            <div>
              {/* by props */}
              slider
            </div>
          </div>
          <div className='header_and_description_container'>
            <div>
              <span>
                {/* by props */}
                Main Header
              </span>
            </div>
            <div>
              <span>
                {/* by props */}
              Description
              </span>
            </div>
          </div>
        </div>
        <div className='main_second_path_container'>
          <div className='select_container'>
            select
          </div>
        </div>
      </main>
      <footer>
        <div className='footer_main_container'>

        </div>
      </footer>
    </div>
  )
}