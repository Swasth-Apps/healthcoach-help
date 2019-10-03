import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { Link } from 'gatsby';
import { routes } from './constants';

const TopicsGrid = ({ heading, topic }) => (
  <div className={`container ${heading ? 'box' : 'content'}`}>
    {
      heading ? <h3>{heading}</h3> : ''
    }
    <ul>
    {
      topic ? topic.map(({title, slug}) => (
        <Link to={slug}><li>{title}</li></Link>
      )) : ''
    }
    </ul>
  </div>
)

TopicsGrid.propTypes = {
      heading: PropTypes.string,
      topic: PropTypes.array,
}

export default TopicsGrid