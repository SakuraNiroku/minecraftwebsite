import { Link, NavLink } from "react-router-dom"
import './NavBar.css'
import i18n from './../i18n'
import { Navbar, Nav, Container } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

function NavBar() {
    return(
        // <nav id="navbar">
        //     <NavLink to={'/'}>{i18n('navbar.home')}</NavLink>
        //     <NavLink to={'/about'}>{i18n('navbar.abount')}</NavLink>
        //     <NavLink to={'/join'}>{i18n('navbar.join')}</NavLink>
        // </nav>
        <Navbar bg="dark" variant="dark">
            <Container>
                <LinkContainer to={`/`}><Navbar.Brand>{i18n('navbar.brand')}</Navbar.Brand></LinkContainer>
                {/* <Nav className="me-auto">
                    <LinkContainer to={`/`}><Nav.Link>{i18n('navbar.home')}</Nav.Link></LinkContainer>
                    <LinkContainer to={`/about`}><Nav.Link>{i18n('navbar.abount')}</Nav.Link></LinkContainer>
                    <LinkContainer to={`/join`}><Nav.Link>{i18n('navbar.join')}</Nav.Link></LinkContainer>
                </Nav> */}
            </Container>
        </Navbar>    
    )
}

export default NavBar