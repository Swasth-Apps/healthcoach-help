import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import TopicsGrid from '../components/TopicsGrid';
import Content, { HTMLContent } from '../components/Content'

export const FeatureTemplate = ({
  feature,
  helmet,
  content,
  contentComponent
}) => {
  const { description, title, featuredimage, topics } = feature;
  const PostContent = contentComponent || Content;
  return (
    <section className="section feature-section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="is-size-2 has-text-weight-bold is-bold-light base-text title">
              {title}
            </h1>
            {/*{ featuredimage ?
            <PreviewCompatibleImage imageInfo={{...feature, image: featuredimage}} />
            : ''}*/}
            <PostContent content={content} />
            <p className="content para-text">{description}</p>
            <div className="columns" style={{flexWrap:"wrap"}}>
            {
              topics && topics.length ? topics.map(topic => (
                <div className="column is-half">
                <TopicsGrid {...topic} />
                </div>
              )) : ''
            }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

FeatureTemplate.propTypes = {
  helmet: PropTypes.object,
  feature: PropTypes.object,
  content: PropTypes.node,
  contentComponent: PropTypes.func,
}

const Feature = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <FeatureTemplate
        feature={post.frontmatter}
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Feature">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
      />
    </Layout>
  )
}

Feature.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Feature

export const pageQuery = graphql`
  query FeaturePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        featuredimage{
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        topics{
          heading,
          topic{
            title,
            slug
          }
        }
      }
    }
  }
`;
