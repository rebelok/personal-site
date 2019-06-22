import React from 'react';
import styled from '@emotion/styled';

import { rhythm } from '../utils/typography';

import Footer from './footer';
import Header from './header';
import { URL } from '../constants';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1)};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
`;

class Layout extends React.Component {
  render() {
    const { location, title, subTitle, children, author, social } = this.props;

    return (
      <Container>
        <Header
          title={title}
          subTitle={subTitle}
          isRoot={location.pathname === URL.DEFAULT}
        />

        <Main>{children}</Main>

        <Footer author={author} {...social} />
      </Container>
    );
  }
}

export default Layout;
