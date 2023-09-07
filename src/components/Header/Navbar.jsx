import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Header from '.';

export default function NavBar() {
    return (
        <Navbar expand="lg" className="p-4">
            <Container className='relative'>
                <Navbar.Brand href="#home"><Header /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="absolute duration-300 top-10 inset-0 bg-white h-72 py-3 mt-3 flex flex-col gap-4 text-center items-center rounded-xl">
                    <Nav.Link className='font-semibold text-lg px-5 hover:bg-yellow-400 hover:rounded-full' href="#">About</Nav.Link>
                    <Nav.Link className='font-semibold text-lg px-5 hover:bg-yellow-400 hover:rounded-full' href="#">Services</Nav.Link>
                    <Nav.Link className='font-semibold text-lg px-5 hover:bg-yellow-400 hover:rounded-full' href="#">Project</Nav.Link>
                    <Nav.Link className='font-semibold text-lg px-5 hover:bg-yellow-400 hover:rounded-full' href="#">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
