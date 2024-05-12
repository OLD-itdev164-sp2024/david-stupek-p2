import * as React from "react"
import { Link, graphql } from "gatsby" 
import { GatsbyImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const ProdcutsPage = ({ data }) => (
  <Layout>
    <Seo title="products" />
    <ul className={styles.list}>
      {
        data.allContentfulKnife.edges.map(edge => (
          <li key={edge.node.id}>
            <Link to={`/knife/${edge.node.slug}/`}>{edge.node.Knife}</Link>
            <div>
              <GatsbyImage
                image={edge.node.heroImage.gatsbyImageData}
              />
            </div>
            <div>
              {edge.node.body} 
            </div>
          </li>
        ))
      }
    </ul>
  </Layout>
)

export default ProdcutsPage;

export const query = graphql`
query MyQuery {
  allContentfulKnife {
    edges {
      node {
        id
        Knife
        slug
        body
        heroImage {
          gatsbyImageData(layout: FIXED, placeholder: DOMINANT_COLOR, width: 300)
        }
      }
    }
  }
}`
