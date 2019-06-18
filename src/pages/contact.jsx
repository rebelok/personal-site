import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Layout } from '../components';

const ContactPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          subTitle
          author
          social {
            twitter
            email
            linkedIn
            github
          }
        }
      }
    }
  `);

  const siteMetadata = data.site.siteMetadata;
  const { email, twitter, linkedIn } = siteMetadata.social;
  return (
    <Layout location={location} {...siteMetadata}>
      <h1>Contacts</h1>
      <h2>You can contact me using:</h2>
      <ul>
        <li>
          Email:{' '}
          <a target="_blank" rel="noopener noreferrer" href={`mailto:${email}`}>
            {email}
          </a>
        </li>
        <li>
          Twitter:{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://twitter.com/${twitter}`}
          >
            @{twitter}
          </a>
        </li>
        <li>
          LinkedIn:{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.linkedin.com/in/${linkedIn}/`}
          >
            LinkedIn
          </a>
          . I rarely check it, so please use one of others
        </li>
      </ul>
    </Layout>
  );
};

export default ContactPage;
