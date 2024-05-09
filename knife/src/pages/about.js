import React from 'react'
import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

const About = ({ data }) => {
    const { name, company } = data.site.siteMetadata.contact
    return (
        <Layout>
            <Seo title="About us" />
            <h1>About us</h1>
            <p>{`${company} was started by ${name} in 2024`}</p>
            <p>{`At ${company} we got the best knifes`}</p>
            <div style={{ maxWidth: `300`, marginBottom: `1.45rem`}}>
                <StaticImage 
                scr="../images/gatsby-icon.png"
                width={300}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="A Knife Store by David Stupek for Hein LLC"
                style={{ marginBottom: `1.45rem`}}
                />
            </div>
            <Link to="/">Home</Link>
            </Layout>
    )
}

export default About


export const query = graphql`
query {
    site {
      siteMetadata {
        contact {
          address
          company
          name
        }
      }
    }
  }
`