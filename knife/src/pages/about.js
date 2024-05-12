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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet bibendum enim facilisis gravida. Sed id sagittis ipsum. Nullam commodo sem arcu, et sollicitudin arcu aliquet non. Curabitur sit amet massa nec sem facilisis scelerisque eget et arcu. Fusce mollis lacus nec elit tristique, at condimentum dolor viverra. Aenean justo felis, viverra at volutpat a, vehicula eget dolor. Praesent fringilla dapibus dignissim. Pellentesque quis lacinia ex. Sed et massa felis.
              Nunc velit risus, dapibus non interdum at, lacinia quis orci. Sed vel quam vitae ligula blandit sagittis. Pellentesque consequat, mauris sit amet vehicula fermentum, quam felis hendrerit sapien, eget auctor velit ligula nec ligula
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet bibendum enim facilisis gravida. Sed id sagittis ipsum. Nullam commodo sem arcu, et sollicitudin arcu aliquet non. Curabitur sit amet massa nec sem facilisis scelerisque eget et arcu. Fusce mollis lacus nec elit tristique, at condimentum dolor viverra. Aenean justo felis, viverra at volutpat a, vehicula eget dolor. Praesent fringilla dapibus dignissim. Pellentesque quis lacinia ex. Sed et massa felis.
              Nunc velit risus, dapibus non interdum at, lacinia quis orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet bibendum enim facilisis gravida. Sed id sagittis ipsum. Nullam commodo sem arcu, et sollicitudin arcu aliquet non. Curabitur sit amet massa nec sem facilisis scelerisque eget et arcu. Fusce mollis lacus nec elit tristique, at condimentum dolor viverra. Aenean justo felis, viverra at volutpat a, vehicula eget dolor. Praesent fringilla dapibus dignissim. Pellentesque quis lacinia ex. Sed et massa felis.
              Nunc velit risus, dapibus non interdum at, lacinia quis orci. 
            </p>
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