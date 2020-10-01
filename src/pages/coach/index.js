import React from "react";
import IndexPage from "../../templates/index-page";
import {graphql} from "gatsby";
const Coach = (props) => {
    console.log(props);
    return <IndexPage
        {...props}
        isClient={false}
    />;
};

export default Coach;

export const pageQuery = graphql`
  query IndexPageTemplateCoach {
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
