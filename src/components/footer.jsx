import React from 'react';
import { rhythm } from '../utils/typography';

const Footer = ({ author, twitter, github, linkedIn }) => {
  const linkStyle = {
    alignItems: 'center',
    width: '30px',
    height: '30px',
    border: '1px solid',
    borderColor: '#555',
    borderRadius: '50%',
    color: '#555',
    transition: '.2s',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: rhythm(0.5),
    marginRight: rhythm(0.5),
  };

  const iconStyle = {
    width: '16px',
    height: '16px',
    fill: 'currentColor',
  };
  return (
    <footer
      style={{
        marginTop: rhythm(1.5),
        marginLeft: `auto`,
        marginRight: `auto`,
        marginBottom: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          margin: rhythm(0.25),
          justifyContent: 'center',
        }}
      >
        <a
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
          href={`https://twitter.com/${twitter}`}
        >
          <svg
            style={iconStyle}
            role="img"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 3.538a6.461 6.461 0 0 1-1.884.516 3.301 3.301 0 0 0 1.444-1.816 6.607 6.607 0 0 1-2.084.797 3.28 3.28 0 0 0-2.397-1.034 3.28 3.28 0 0 0-3.197 4.028 9.321 9.321 0 0 1-6.766-3.431 3.284 3.284 0 0 0 1.015 4.381A3.301 3.301 0 0 1 .643 6.57v.041A3.283 3.283 0 0 0 3.277 9.83a3.291 3.291 0 0 1-1.485.057 3.293 3.293 0 0 0 3.066 2.281 6.586 6.586 0 0 1-4.862 1.359 9.286 9.286 0 0 0 5.034 1.475c6.037 0 9.341-5.003 9.341-9.341 0-.144-.003-.284-.009-.425a6.59 6.59 0 0 0 1.637-1.697z"></path>{' '}
          </svg>
        </a>
        <a
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
          href={`https://github.com/${github}`}
        >
          <svg
            style={iconStyle}
            role="img"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 .198a8 8 0 0 0-2.529 15.591c.4.074.547-.174.547-.385 0-.191-.008-.821-.011-1.489-2.226.484-2.695-.944-2.695-.944-.364-.925-.888-1.171-.888-1.171-.726-.497.055-.486.055-.486.803.056 1.226.824 1.226.824.714 1.223 1.872.869 2.328.665.072-.517.279-.87.508-1.07-1.777-.202-3.645-.888-3.645-3.954 0-.873.313-1.587.824-2.147-.083-.202-.357-1.015.077-2.117 0 0 .672-.215 2.201.82A7.672 7.672 0 0 1 8 4.066c.68.003 1.365.092 2.004.269 1.527-1.035 2.198-.82 2.198-.82.435 1.102.162 1.916.079 2.117.513.56.823 1.274.823 2.147 0 3.073-1.872 3.749-3.653 3.947.287.248.543.735.543 1.481 0 1.07-.009 1.932-.009 2.195 0 .213.144.462.55.384A8 8 0 0 0 8.001.196z"></path>{' '}
          </svg>
        </a>
        <a
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.linkedin.com/in/${linkedIn}/`}
        >
          <svg
            style={iconStyle}
            role="img"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 6h2.767v1.418h.04C9.192 6.727 10.134 6 11.539 6 14.46 6 15 7.818 15 10.183V15h-2.885v-4.27c0-1.018-.021-2.329-1.5-2.329-1.502 0-1.732 1.109-1.732 2.255V15H6V6zM1 6h3v9H1V6zM4 3.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 4 3.5z"></path>{' '}
          </svg>
        </a>
      </div>
      <p style={{ margin: 0 }}>
        © {author} {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
