import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { GatsbyImage } from "gatsby-plugin-image";



const KnifePage = ({ data }) => {
    const { Knife, body, material, heroImage, gatsbyImageData, price } = data.contentfulKnife;

    useEffect(() => {
      if (window.paypal) {
          window.paypal.Buttons({
              createOrder: function(data, actions) {
                  return actions.order.create({
                      purchase_units: [{
                          description: Knife,
                          amount: {
                              currency_code: 'USD',
                              value: price
                          }
                      }]
                  });
              },
              onApprove: function(data, actions) {
                  return actions.order.capture().then(function(details) {
                      alert('Transaction completed by ' + details.payer.name.given_name);
                      // Here you can redirect or update the page as needed
                  });
              }
          }).render('#paypal-button-container');
      }
  }, [price, Knife]);

    return (
        <Layout>
            <h1>{Knife}</h1>
            <div>
              <GatsbyImage
                image={heroImage.gatsbyImageData}
              />
            </div>
            <ul>
                <li>${price}</li>
                <li>Description: {body}</li>
                <li>Material: {material}</li>
            </ul>
            <div id="paypal-button-container"></div>
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