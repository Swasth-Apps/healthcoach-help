import React from "react";
import PropTypes from "prop-types";

import Layout from "../components/Layout";
import Features from "../components/Features";
import Categories from "../components/Categories";
import Search from "../components/search";

const searchIndices = [
    {name: `swasth`, title: `Pages`, hitComp: `PageHit`},
];

export const IndexPageTemplate = ({
                                      title,
                                      features,
                                      categories,
                                      isClient= false
                                  }) => (
    <div className="home-top">
        <div className="full-width-image margin-top-0 home-back">
            <div className="home-head-box">
                <h1 className="head-title base-text">
                    {title}
                </h1>
                <Search indices={searchIndices}/>
            </div>
        </div>
        <section className="section section--gradient landing-page-section">
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="content">
                                {features ?
                                    <section className="section">
                                        <Features
                                            isClient={isClient}
                                            gridItems={features.feature}
                                            description={features.description}
                                        />
                                    </section> : ''}
                                <section className="section second-section">
                                    <Categories
                                        isClient={isClient}
                                        gridItems={categories.category}
                                    />
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    description: PropTypes.string,
    features: PropTypes.object,
    categories: PropTypes.object
};

const IndexPage = (props) => {
    const {features, categories} = props.data;
    return (
        <Layout transparent={true}>
            <IndexPageTemplate
                features={features}
                categories={categories}
            />
        </Layout>
    )
};

IndexPage.propTypes = {
    data: PropTypes.shape({
        features: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
        categories: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default IndexPage
