import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import Header from "./header"
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
      </Content>
      </ThemeProvider>
  )
      
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
      

export default Layout