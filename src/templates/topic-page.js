import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {graphql, Link} from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import TopicsGrid from '../components/TopicsGrid';
import Content, {HTMLContent} from '../components/Content'
import ReactPlayer from 'react-player'
import {routes} from "../components/constants";

export const TopicsTemplate = ({
                                   feature,
                                   helmet,
                                   content,
                                   contentComponent,
                                   isClient
                               }) => {
    const {title, featuredimage, topics, recentTopics, liveDemo} = feature;
    const PostContent = contentComponent || Content;
    return (
        <section className="section topic-section">
            {helmet || ''}
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1 content">
                        <h1 className="title is-size-2 has-text-weight-bold is-bold-light base-text">
                            {title}
                        </h1>
                        <div className="columns" style={{marginTop: 10}}>
                            <div className="column is-8">
                                {featuredimage ?
                                    <PreviewCompatibleImage imageInfo={{...feature, image: featuredimage}}/>
                                    : ''}
                                <div className="topic-rich-content">
                                    <PostContent content={content}/>
                                </div>
                                <div className="columns">
                                    {
                                        topics && topics.length ? topics.map(topic => (
                                            <div className="column is-half">
                                                <TopicsGrid {...topic} />
                                            </div>
                                        )) : ''
                                    }
                                </div>
                            </div>
                            <div className="column is-4 content recent-topic-container">
                                {
                                    liveDemo ?
                                        <Fragment>

                                            <div className="box">
                                                {
                                                    <ReactPlayer url={liveDemo} width="100%" height="186px"/>
                                                }
                                            </div>
                                        </Fragment>
                                        : ''}
                                {recentTopics && recentTopics.length ? <>
                                    <h2 className="is-size-4 sub-title recent-topic-title">
                                        Related Topics
                                    </h2>
                                    <div className="box">
                                        <ul className="topic-link-container">
                                            {
                                                recentTopics ? recentTopics.map(({slug, title}) => (
                                                    <li><Link to={`${isClient ? "client": "coach"}/${slug}`} className="topic-grid-link">{title}</Link></li>
                                                )) : ''
                                            }
                                        </ul>
                                    </div>
                                </> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

TopicsTemplate.propTypes = {
    helmet: PropTypes.object,
    feature: PropTypes.object,
    content: PropTypes.node,
    contentComponent: PropTypes.func,
}

const Feature = ({data,...props}) => {
    const {markdownRemark: post} = data;
    return (
        <Layout>
            <TopicsTemplate
                isClient={props.path.includes("/client/")}
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
  query TopicByID($id: String!) {
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
        liveDemo
        recentTopics{
          title,
          slug
        }
      }
    }
  }
`
