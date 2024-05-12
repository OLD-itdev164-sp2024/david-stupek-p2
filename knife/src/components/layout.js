import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
/*This is so sensitive I had to copy the whole path to make it stick this time. But I had trouble with this in the homework and p1*/ 
import { Blade } from "/Users/davidstupek/MATC/david-stupek-p2/david-stupek-p2/knife/src/themes/Blade/Blade.js"
// In your HTML head or in a React layout component
<script src="https://www.paypal.com/sdk/js?client-id=AZ031OYiwhtCuvQi0wCL7tbunHQzDesQ01DvVFQ4jZLZm8kCXVaLDsOOfXAu7qDeeYeR7CEzA6HwjdOZ&currency=USD"></script>


const Content = styled.div`
  margin: 0 auto;
  max-width: var(--size-content);
  padding: var(--size-gutter);
`

const HamburgerIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
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

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={Blade}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Content>
        <main>{children}</main> 
      </Content>
      <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
      </ThemeProvider>
  )
      
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
      

export default Layout

/* 
 <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
          >
            {new Date().getFullYear()} Built with 
            {` `}
            <a href="https://www.gatsbyjs.com">David Stupek & Gatsby</a>
          </footer>
        */ 