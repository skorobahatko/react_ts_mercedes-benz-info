import * as React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './styles.scss';

const Header: React.FC = () => {
    return (
      <header>
        <Navbar bg="dark" variant="dark">
         <Navbar.Brand href="/home">Rick and Morty FAQ</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/characters/page=1">Characters</Nav.Link>
            <Nav.Link href="/locations/page=1">Locations</Nav.Link>
            <Nav.Link href="/episodes/page=1">Episodes</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='/search/page=1'>Search</Nav.Link>
          </Nav>
        </Navbar> 
      </header> 
    )
}
export { Header };