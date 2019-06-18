import React from 'react';

import { Link } from 'gatsby';
import { rhythm, scale } from '../utils/typography';
import { URL } from '../constants';

const linkStyle = {
  fontSize: scale(-1 / 10),
  marginRight: rhythm(1),
  marginLeft: rhythm(1),
  textDecoration: 'none',
  ':hover': {
    color: '#f57a3d',
  },
};

const activeStyle = {
  color: '#333',
};

const TopMenu = () => {
  return (
    <nav
      style={{
        marginBottom: rhythm(1.5),
      }}
    >
      <ul
        style={{
          display: 'flex',
          margin: 0,
          listStyleType: 'none',
          justifyContent: 'center',
        }}
      >
        <li>
          <Link style={linkStyle} activeStyle={activeStyle} to={URL.DEFAULT}>
            Home
          </Link>
        </li>
        <li>
          <Link
            style={linkStyle}
            partiallyActive={true}
            activeStyle={activeStyle}
            to={URL.ME}
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            style={linkStyle}
            partiallyActive={true}
            activeStyle={activeStyle}
            to={URL.CONTACT}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopMenu;
