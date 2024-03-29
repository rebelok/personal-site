import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SEO } from '../components';

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props;
    const siteMetadata = data.site.siteMetadata;

    return (
      <Layout location={this.props.location} {...siteMetadata}>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    );
  }
}

export default NotFoundPage;

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
  }
`;
