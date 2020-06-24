import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import Iframe from 'react-iframe';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';

const Home = (props) => {
  const markdown = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="Small Business Theme. Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This is a beautiful and artfully designed starting theme."
        />
      </Helmet>
      <div className="pb-4" style={{ paddingTop: 50 }}>
        <div className="container">
          <h1>Watch Bible study live</h1>
          <Iframe
            url="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Frccghelsinkifi%2Fvideos%2F901831353619008%2F&width=1280"
            width="1000px"
            height="600px"
            id="myId"
            allowTransparency="true"
            allowFullScreen="true"
            className="myClassname"
            display="initial"
            position="relative"
          />
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
  }
`;

export default Home;
