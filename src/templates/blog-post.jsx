import React from 'react';
import { Link, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { Bio, Layout, SEO } from '../components';
import { rhythm, scale } from '../utils/typography';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulBlogPost;
    const siteMetadata = this.props.data.site.siteMetadata;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} {...siteMetadata}>
        <SEO title={post.title} description={post.description} />
        <h1>{post.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.publishDate}
        </p>
        {documentToReactComponents(post.body.json)}
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        subTitle
        social {
          twitter
          github
          linkedIn
        }
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      body {
        json
      }
      publishedDate
    }
  }
`;
