import React from 'react';
import css from '@emotion/css';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';
import { URL } from '../constants';

const linkScale = scale(-1 / 10);
const linkStyle = css`
  font-size: ${linkScale.fontSize};
  line-height: ${linkScale.lineHeight};
  margin: 0 ${rhythm(1)};
  text-decoration: none;
  &:hover {
    color: #f57a3d;
  }
`;

const Menu = styled.ul`
  display: flex;
  margin: 0;
  list-style-type: none;
  justify-content: center;
`;

const Nav = styled.nav`
  margin-bottom: ${rhythm(1.5)};
`;

const activeStyle = {
  color: '#333',
};

const TopMenu = () => {
  return (
    <Nav>
      <Menu>
        <li>
          <Link css={linkStyle} activeStyle={activeStyle} to={URL.DEFAULT}>
            Home
          </Link>
        </li>
        <li>
          <Link
            css={linkStyle}
            partiallyActive={true}
            activeStyle={activeStyle}
            to={URL.ME}
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            css={linkStyle}
            partiallyActive={true}
            activeStyle={activeStyle}
            to={URL.CONTACT}
          >
            Contact
          </Link>
        </li>
      </Menu>
    </Nav>
  );
};

export default TopMenu;
