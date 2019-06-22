import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { rhythm } from '../utils/typography';

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/author.jpeg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

const BioContainer = styled.div`
  margin-bottom: ${rhythm(2.5)};
  display: flex;
`;

const avatarStyle = css`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  min-width: 50px;
  border-radius: 100%;
`;

const Bio = ({ site, avatar }) => {
  const { author, social } = site.siteMetadata;
  return (
    <BioContainer>
      <Image
        fixed={avatar.childImageSharp.fixed}
        alt={author}
        css={avatarStyle}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author}</strong> who lives in beautiful
        Saint-Petersburg. Wanna follow him on{` `}
        <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>?
      </p>
    </BioContainer>
  );
};

export default () => <StaticQuery query={bioQuery} render={Bio} />;
