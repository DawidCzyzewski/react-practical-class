import { Link, NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  color: black;
  padding: 3px;
  background: lightgrey;
  text-decoration: none;
  display: block;
  radious: 5px;
  width: 90px;
  margin-right: 5px;
  text-align: center;
  &.active {
    color: red;
  }
`;

export const SharedLayout = () => {
  return (
    <div>
      <div>
        <div style={{ marginBottom: "16px" }}>
          <span>This my awesome page!</span>
          <span role="img" aria-label="computer icon">
            💻
          </span>
          <span>It's my story</span>
        </div>
        {/* To create navigation to not to have remember all links, I create container nav and element Link or NavLink inside. Navlink has attribute "active" so we can stylize it */}
        <nav style={{ display: "flex" }}>
          {/* Link get two elements: to and visable name */}
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
          <StyledNavLink to="/user">User</StyledNavLink>
          <StyledNavLink to="/products">Products</StyledNavLink>
          <StyledNavLink to="/sdadsasdc ">Not found!</StyledNavLink>

          {/* <Link to="/user">User</Link>
        <Link to="/sdadsasdc ">Not found!</Link> */}
        </nav>
        {/* Routes is some kind of container dedicated to have our *URLs* in this place, to not searching in all folders and files */}
      </div>
      <Outlet />
    </div>
  );
};
