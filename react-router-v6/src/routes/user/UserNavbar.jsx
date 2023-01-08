import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate } from "react-router-dom";



function UserNavbar() {
  const userId = 1;
  const navigate = useNavigate();



  const logoutHandler=()=>{
    navigate("/", {replace:  true});
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/user" end>User Home</NavLink>
            <NavLink to="userprofile" end>User profile</NavLink>
            <NavLink to={`${userId}/useredit`} end>User Edit</NavLink>
            <button onClick={logoutHandler} to="/">Home</button>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default UserNavbar;
