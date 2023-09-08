import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Header from '.';

export default function NavBar() {
    return (
        <Navbar expand="lg" className="p-5 flex justify-between items-center">
                <Header />
                <div className='lg:hidden'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="
                        absolute right-20 top-24 bg-white px-10 py-8 rounded-xl flex flex-col gap-3
                        xl:relative
                        ">
                        <Nav.Link className='
                            font-semibold text-lg px-5 hover:bg-yellow-400 hover:rounded-full
                            xl:text-white xl:hover:bg-cyan-300
                            ' href="#">About</Nav.Link>
                        <Nav.Link className='font-semibold text-lg px-5 hover:bg-yellow-400 hover:rounded-full
                            xl:text-white xl:hover:bg-cyan-300
                            ' href="#">Services</Nav.Link>
                        <Nav.Link className='font-semibold text-lg px-5 hover:bg-yellow-400 hover:rounded-full
                            xl:text-white xl:hover:bg-cyan-300
                            ' href="#">Project</Nav.Link>
                        <Nav.Link className='font-semibold text-lg px-5 hover:bg-yellow-400 hover:rounded-full
                            xl:text-white xl:hover:bg-cyan-300
                            ' href="#">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </div>
                <div className='max-[1024px]:hidden'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="">
                        <Nav.Link className='
                            font-semibold text-lg px-5 hover:bg-yellow-400 hover:rounded-full
                            xl:text-white xl:hover:bg-cyan-300
                            ' href="#">About</Nav.Link>
                        <Nav.Link className='font-semibold text-lg px-5 hover:bg-yellow-400 hover:rounded-full
                            xl:text-white xl:hover:bg-cyan-300
                            ' href="#">Services</Nav.Link>
                        <Nav.Link className='font-semibold text-lg px-5 hover:bg-yellow-400 hover:rounded-full
                            xl:text-white xl:hover:bg-cyan-300
                            ' href="#">Project</Nav.Link>
                        <Nav.Link className='font-semibold text-lg px-5 hover:bg-yellow-400 hover:rounded-full
                            xl:text-white xl:hover:bg-cyan-300
                            ' href="#">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </div>
        </Navbar>
    );
}
