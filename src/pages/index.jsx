import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';

import { Layout, SEO } from '../components';
import { rhythm } from '../utils/typography';

const PostHeader = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`;

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
              <PostHeader>
                <Link to={node.slug}>{title}</Link>
              </PostHeader>
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
