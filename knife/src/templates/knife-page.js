import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage } from "gatsby-plugin-image"

const KnifePage = ({ data }) => {
    const { Knife, body, material, heroImage, gatsbyImageData, price } = data.contentfulKnife;

    return (
        <Layout>
            <h1>{Knife}</h1>
            <div>
              <GatsbyImage
                image={heroImage.gatsbyImageData}
              />
            </div>
            <ul>
                <li>
                   ${price}
                </li>
                <li>
                  Description: {body}
                </li>
                <li>
                  Material: {material}
                </li>
            </ul>
        </Layout>
    );
}

export default KnifePage;

export const pageQuery = graphql`
    query knifePageQuery($slug: String!){
        contentfulKnife(slug: {eq: $slug}){
            Knife
            slug
            body
            material
            price
            heroImage {
                gatsbyImageData(layout: FIXED, placeholder: DOMINANT_COLOR, width: 300)
              }
        }
    }
`