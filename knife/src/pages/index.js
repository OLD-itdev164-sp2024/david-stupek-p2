import * as React from "react"
import { Link, graphql } from "gatsby" 
import { GatsbyImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <ul className={styles.list}>
      {
        data.allContentfulKnife.edges.map(edge => (
          <li key={edge.node.id}>
            <Link to={`/knife/${edge.node.slug}/`}>{edge.node.Knife}</Link>
           
            <div>
              {edge.node.description} 
            </div>
          </li>
        ))
      }
    </ul>
  </Layout>
)

export default IndexPage;

export const query = graphql`
query MyQuery {
  allContentfulKnife {
    edges {
      node {
        id
        Knife
        slug
        description
        heroImage {
          gatsbyImageData(layout: FIXED, placeholder: DOMINANT_COLOR, width: 300)
        }
      }
    }
  }
}`
