import { Container, Navbar, NavbarBrand } from "reactstrap";

const NavbarWid = () => {
  return (
    <Container>
      <Navbar className="my-2" color="light" light>
        <NavbarBrand href="/">Food House</NavbarBrand>
        <div>
          <NavbarBrand href="/">
            <img src="https://img.icons8.com/material/24/search-more--v2.png" />
          </NavbarBrand>
          <NavbarBrand href="/">
            <img src="https://img.icons8.com/material/26/like--v1.png" />
          </NavbarBrand>
          <NavbarBrand href="/">
            <img src="https://img.icons8.com/material/26/administrator-male--v1.png" />
          </NavbarBrand>
        </div>
      </Navbar>
    </Container>
  );
};

export default NavbarWid;
