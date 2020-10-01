import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import topBack from "../../static/img/top-bg@3x.png";

import Layout from "../components/Layout";
import Features from "../components/Features";
import Categories from "../components/Categories";
import Search from "../components/search";

const searchIndices = [
  { name: `swasth`, title: `Pages`, hitComp: `PageHit` },
]

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  description,
  features,
  categories
}) => (
  <div className="home-top">
    <div className="full-width-image margin-top-0 home-back">
      {/*<img src={topBack} className="home-back-img"/>*/}
      {/*<img src={bannerIcon} className="home-back-icon"/>*/}
      <div className="home-head-box">
          <h1 className="head-title base-text">
            {title}
          </h1>
          <Search indices={searchIndices} />
      </div>
    </div>
    {/* <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: 'linear-gradient(to bottom right, #667eea, #764ba2)',
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
            textAlign: "center"
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
            textAlign: "center",
            margin: "auto",
            fontSize: "18px",
            lineHeight: "26px",
            width: '60%'
          }}
        >
          {subheading}
        </h3>
        <Search indices={searchIndices} />
      </div>
    </div> */}
    <section className="section section--gradient landing-page-section">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                { features ?
                <section className="section">
                  {/* <h3 className="has-text-weight-semibold is-size-2 has-text-centered">
                    {features.heading}
                  </h3> */}
                <Features gridItems={features.feature} description={features.description} />
                </section>  : ''}
                {/* <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div> */}
                 <section className="section second-section">
                  {/* <h3 className="has-text-weight-semibold is-size-2 has-text-centered">
                    {categories.heading}
                  </h3> */}
                  <Categories gridItems={categories.category} />
                </section> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
  features: PropTypes.object,
  categories: PropTypes.object
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout transparent={true}>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        features={frontmatter.features}
        categories={frontmatter.categories}
        description={frontmatter.description}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

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
`
