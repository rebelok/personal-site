import React from 'react';

import { rhythm } from '../utils/typography';

import Footer from './footer';
import Header from './header';
import { URL } from '../constants';

class Layout extends React.Component {
  render() {
    const { location, title, subTitle, children, author, social } = this.props;

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1)}`,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header
          title={title}
          subTitle={subTitle}
          isRoot={location.pathname === URL.DEFAULT}
        />
        <main style={{ flexGrow: 1 }}>{children}</main>
        <Footer author={author} {...social}/>
      </div>
    );
  }
}

export default Layout;
