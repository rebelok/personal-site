import React from 'react';
import { rhythm, scale } from '../utils/typography';
import { Link } from 'gatsby';

import TopMenu from './top-menu';

const Header = ({ title, subTitle, isRoot }) => {
  return (
    <header
      style={{
        textAlign: 'center',
      }}
    >
      {isRoot ? (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      ) : (
        <h3
          style={{
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )}
      <p
        style={{
          ...scale(-1 / 5),
          color: '#555',
          marginTop: rhythm(1),
          marginBottom: rhythm(1),
        }}
      >
        {subTitle}
      </p>
      <TopMenu />
    </header>
  );
};

export default Header;
