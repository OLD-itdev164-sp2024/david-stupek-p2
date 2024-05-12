import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { useState } from "react";  

const StyledHeader = styled.header`
  margin: 0 auto;
  padding: var(--space-4) var()(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background: ${props => props.theme.header.backgroundColor};
`

const StyledLink = styled(Link)`
font-size: 25px;
text-decoration: none;
&:hover {
    text-decoration: underline;  // This will apply an underline on hover
  }
color: ${props => props.theme.header.color};
`
const HamburgerIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 25px;
  width: 35px;
  z-index: 10;

  span {
    display: block;
    width: 100%;
    height: 3px;
    background: ${props => props.theme.header.color || 'black'};
  }
`

const NavLinks = styled.nav`
  display: ${props => props.isOpen ? 'flex' : 'none'}; // Default hidden
  align-items: center;
  position: absolute;
  top: 100%;
  left: 0;
  background: ${props => props.theme.header.backgroundColor};
  width: 100%;
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: flex-end;
    background: none;
  }
`

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledHeader>
      <StyledLink to="/">
        {siteTitle}
      </StyledLink>
      <HamburgerIcon onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerIcon>
      <NavLinks isOpen={isOpen}>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </NavLinks>
    </StyledHeader>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ""
};

export default Header;
