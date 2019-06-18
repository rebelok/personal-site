import React from 'react';

import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import { Layout, SEO } from '../components';

const AboutPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      nomad: file(absolutePath: { regex: "/digital-nomad.jpg/" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
          subTitle
          author
        social{
          twitter
          github
          linkedIn
        }
        }
      }
    }
  `);

  const siteMetadata = data.site.siteMetadata;

  return (
    <Layout location={location} {...siteMetadata}>
      <SEO title="About me" />

      <h1>About me</h1>
      <Image
        fixed={data.nomad.childImageSharp.fixed}
        alt="Digital nomad"
        style={{
          float: 'right',
        }}
      />
      <p>
        Hello! My name is Andrew Vdovichenko. I'm a full-stack software engineer
        from the beautiful Saint-Petersburg.
      </p>
      <p>
        Since 2015 I work remotely and wander around the world while working
        (This phenom has its name: Digital Nomad).
      </p>
      <p>
        I've been working from Russia, Ukraine, Moldova, Romania, Bulgary, UAE,
        China, Thailand, Finland, Spain, Italy, Turkey, USA, and the Dominican
        Republic. Every place has something to offer for a nomad software
        engineer.
      </p>
      <p>
        While I wander the globe, I not only work but try to spend time on my
        hobbies: surfing - when there are waves, kite-surfing - when there is
        wind, skiing - when there is snow, and photography - everywhere!
      </p>
      <p>
        Need a Software Engineer? <Link to="/contact">Contact me!</Link>
      </p>
    </Layout>
  );
};

export default AboutPage;
