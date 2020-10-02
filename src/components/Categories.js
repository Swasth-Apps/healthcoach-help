import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import { Link } from "gatsby";
import { routes } from "./constants";

const CategoriesGrid = ({ gridItems,isClient }) => (
  <div className="columns is-multiline category-grid">
    {gridItems.map(item => (
      <div key={item.title} className="column is-4">
        <Link to={`${routes[isClient ? "clientCategories" : "coachCategories"]}/${item.slug}`}>
          <section className="section category-grid-item" style={{ padding: "5px" }}>
            <div className="has-text-centered category-grid-box">
              <div className="category-grid-content-box">
                <a className="category-link-text base-text category-grid-content">{item.title}</a>
              </div>
              <div className="category-grid-img-box">
                <PreviewCompatibleImage imageInfo={item} className="category-grid-img"/>
              </div>
            </div>
          </section>
        </Link>
      </div>
    ))}
  </div>
);

CategoriesGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      slug: PropTypes.string
    })
  )
};

export default CategoriesGrid;
