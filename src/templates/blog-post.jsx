import React from 'react';
import { Link, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from '@emotion/styled';

import { Bio, Layout, SEO } from '../components';
import { rhythm, scale } from '../utils/typography';

const publishDateScale = scale(-1 / 5);
const PublishDate = styled.p`
  font-size: ${publishDateScale.fontSize};
  line-height: ${publishDateScale.lineHeight};
  margin: ${rhythm(1)} 0;
`;

const Line = styled.hr`
  margin-bottom: ${rhythm(1)};
`;

const LinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulBlogPost;
    const siteMetadata = this.props.data.site.siteMetadata;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} {...siteMetadata}>
        <SEO title={post.title} description={post.description} />

        <h1>{post.title}</h1>

        <PublishDate>{post.publishDate}</PublishDate>

        {documentToReactComponents(post.body.json)}

        <Line />

        <Bio />

        <LinkList>
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
        </LinkList>
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
