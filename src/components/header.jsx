import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';

import TopMenu from './top-menu';
import css from '@emotion/css';

const HeaderContainer = styled.header`
  text-align: center;
`;

const SmallHeader = styled.h3`
  margin-top: 0;
`;

const headerScale = scale(1.5);
const BigHeader = styled.h1`
  font-size: ${headerScale.fontSize};
  line-height: ${headerScale.lineHeight};
  margin: 0 0 ${rhythm(1.5)};
`;

const headerLinkStyle = css`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`;

const subTitleScale = scale(-1 / 5);
const SubTitle = styled.p`
  line-height: ${subTitleScale.lineHeight};
  font-size: ${subTitleScale.fontSize};
  color: #555;
  margin: ${rhythm(1)} 0;
`;

const Header = ({ title, subTitle, isRoot }) => {
  const HeaderTag = isRoot ? BigHeader : SmallHeader;
  return (
    <HeaderContainer>
      <HeaderTag>
        <Link css={headerLinkStyle} to={`/`}>
          {title}
        </Link>
      </HeaderTag>
      <SubTitle>{subTitle}</SubTitle>
      <TopMenu />
    </HeaderContainer>
  );
};

export default Header;
