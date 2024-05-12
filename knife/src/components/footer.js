import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledFooter = styled.footer`
margin: 0 auto;
padding: var(--space-4) var()(--size-gutter);
display: flex;
align-items: center;
justify-content: space-between;
height: 50px;
background: ${props => props.theme.header.backgroundColor};
&:hover {
    text-decoration: underline;  // This will apply an underline on hover
  }
`


const StyledLink = styled(Link)`
  font-size: 25px;
  text-decoration: none;
  color: ${props => props.theme.footer.color}; // Adjust color to match footer theme if needed
`;

const Footer = ({ siteTitle }) => (
  <StyledFooter>
    <StyledLink to="/">
      {siteTitle}
    </StyledLink>
  </StyledFooter>
);

Footer.propTypes = {
  siteTitle: PropTypes.string
};

Footer.defaultProps = {
  siteTitle: ""
};

export default Footer;
