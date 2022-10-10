import {Container, Nav, Navbar, Button} from 'react-bootstrap';
import './Navs.css'
import logo from '../../assets/logo.png';
const Navs = ()=>{
    return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">home</Nav.Link>
            <Nav.Link href="#link">about us</Nav.Link>
            <Nav.Link href="#link">explore food</Nav.Link>
            <Nav.Link href="#link">review</Nav.Link>
            <Nav.Link href="#link">faq</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="primary">2354585663</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default Navs;