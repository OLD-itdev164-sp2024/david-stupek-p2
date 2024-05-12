import React from 'react'
import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

const Contact = ({ data }) => { 
    const  { name, company, address } = data.site.siteMetadata.contact
    return (
        <Layout>
            <Seo title="Contact Us" />
            <h1>Contact Us</h1>
            <div>{company}</div>
            <div>{`C/O ${name}`}</div>
            <div>{address}</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet bibendum enim facilisis gravida. Sed id sagittis ipsum. Nullam commodo sem arcu, et sollicitudin arcu aliquet non. Curabitur sit amet massa nec sem facilisis scelerisque eget et arcu. Fusce mollis lacus nec elit tristique, at condimentum dolor viverra. Aenean justo felis, viverra at volutpat a, vehicula eget dolor. Praesent fringilla dapibus dignissim. Pellentesque quis lacinia ex. Sed et massa felis.
              Nunc velit risus, dapibus non interdum at, lacinia quis orci. Sed vel quam vitae ligula blandit sagittis. Pellentesque consequat, mauris sit amet vehicula fermentum, quam felis hendrerit sapien, eget auctor velit ligula nec ligula
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet bibendum enim facilisis gravida. Sed id sagittis ipsum. Nullam commodo sem arcu, et sollicitudin arcu aliquet non. Curabitur sit amet massa nec sem facilisis scelerisque eget et arcu. Fusce mollis lacus nec elit tristique, at condimentum dolor viverra. Aenean justo felis, viverra at volutpat a, vehicula eget dolor. Praesent fringilla dapibus dignissim. Pellentesque quis lacinia ex. Sed et massa felis.
              Nunc velit risus, dapibus non interdum at, lacinia quis orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet bibendum enim facilisis gravida. Sed id sagittis ipsum. Nullam commodo sem arcu, et sollicitudin arcu aliquet non. Curabitur sit amet massa nec sem facilisis scelerisque eget et arcu. Fusce mollis lacus nec elit tristique, at condimentum dolor viverra. Aenean justo felis, viverra at volutpat a, vehicula eget dolor. Praesent fringilla dapibus dignissim. Pellentesque quis lacinia ex. Sed et massa felis.
              Nunc velit risus, dapibus non interdum at, lacinia quis orci. 
            </p>
            <div style={{ maxWidth: `300`, marginBottom: `1.45rem `}}>
                <StaticImage
                src="https://2.gravatar.com/userimage/159925446/dd24170f05af28b15aa1f800e02fccb2?size=600"
                width={300}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="A knife store"
                style={{ marginBottom: `1.45rem`}}
            />
            </div>
            <Link to="/">Home</Link>
        </Layout>
    )
}

export default Contact

export const query = graphql`
query {
    site {
      siteMetadata {
        contact {
          name
          company
          address
        }
      }
    }
  }
`


