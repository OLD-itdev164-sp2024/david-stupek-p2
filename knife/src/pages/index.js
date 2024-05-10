import * as React from "react"
import { Link, graphql } from "gatsby" 


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
        Knife
        body
        id
        slug
      }
    }
  }
}`
