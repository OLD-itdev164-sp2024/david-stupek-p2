import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const KnifePage = ({ data }) => {
    const { Knife } = data.contentfulKnife;

    return (
        <Layout>
            <h1>{Knife}</h1>
        </Layout>
    )
}

export default KnifePage;

export const pageQuery = graphql`
    query knifePageQuery($slug: String!){
        contentfulKnife(slug: {eq: $slug}){
            Knife
            slug
        }
    }
`