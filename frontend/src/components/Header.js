import {Navbar, Nav, Container} from 'react-bootstrap'
// import person from '../icons/person.svg'
import {FaShoppingCart, FaUser} from 'react-icons/fa'
import {LinkContainer} from 'react-router-bootstrap'
export default function Header(){
    return(
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                    <Navbar.Brand>Proshop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle></Navbar.Toggle>
                    <Navbar.Collapse className='justify-content-end'>
                        <Nav>
                        <Nav.Link>
                            <FaShoppingCart/> Cart
                        </Nav.Link>
                        <Nav.Link>
                            <FaUser/> Sign in
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                
            </Navbar>
        </header>
    )
    }
