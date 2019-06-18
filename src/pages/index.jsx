import React from 'react';
import { Link, graphql } from 'gatsby';

import { Layout, SEO } from '../components';
import { rhythm } from '../utils/typography';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteMetadata = data.site.siteMetadata;
    const posts = data.allContentfulBlogPost.edges;

    return (
      <Layout location={this.props.location} {...siteMetadata}>
        <SEO title="All posts" />

        {posts.map(({ node }) => {
          const title = node.title || node.slug;
          return (
            <div key={node.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link to={node.slug}>{title}</Link>
              </h3>
              <small>{node.publishedDate}</small>
              <p>{node.description}</p>
            </div>
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        subTitle
        author
        social {
          twitter
          github
          linkedIn
        }
      }
    }
    allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          slug
          title
          description
          publishedDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`;
