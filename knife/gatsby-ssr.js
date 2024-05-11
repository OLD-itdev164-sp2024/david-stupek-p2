/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}
const React = require("react");

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script key="paypal-sdk" src="https://www.paypal.com/sdk/js?client-id=AZ031OYiwhtCuvQi0wCL7tbunHQzDesQ01DvVFQ4jZLZm8kCXVaLDsOOfXAu7qDeeYeR7CEzA6HwjdOZ&currency=USD"></script>
  ]);
};
