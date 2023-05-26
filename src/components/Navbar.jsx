import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {

  const Nav = styled.div`
    background-color: red;
  `

  return (
      <>
      <Nav>
          <div>
            logo
          </div>
          <div>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
            <a href="/">Home</a>
            </li>
            <li>
              <Link to={"/Contacts"}>Contacts</Link>
            </li>
          </div>
        </Nav>
        
      </>
    )
}

export default Navbar