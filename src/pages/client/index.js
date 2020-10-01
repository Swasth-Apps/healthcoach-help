import React from "react";
import IndexPage from "../../templates/index-page";
import {graphql} from "gatsby";
const Client = (props) => {
    console.log(props);
    return <IndexPage
        {...props}
        isClient={true}
    />;
};

export default Client;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        description
        features {
          description
          heading
          feature {
            title
            slug
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        categories {
          description
          heading
          category {
            title
            slug
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
