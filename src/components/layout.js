import React from 'react'
import { Helmet } from 'react-helmet'
import { injectGlobal } from '@emotion/css'
import styled from '@emotion/styled'

import NavBar from '../components/navbar'
import HeaderImage from '../components/headerImage'
import ContentWrapper from '../components/contentWrapper'
import Footer from '../components/footer'

import config from '../config'
import ShopAd from '../components/shopAd'

injectGlobal`
  body {
    background-color: #f2f3f7;
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    text-rendering:optimizeLegibility;
    -webkit-font-smoothing:antialiased;
    color: ${config.textColor};
  }
  * {
    box-sizing: border-box
  };
  img {
    display: block;
    max-width: 100%;
  }
  iframe {
    max-width: 100%;
    max-height: 400px !important;
    border: 0;
    width: 800px;
    display: block;
  }
  a {
    text-decoration: underline;
    color: ${config.linkColor};
    &:hover {
      text-decoration: none;
      color: ${config.glossbossBlueLighter}
    }
  }
`
const Main = styled.div`
  font-size: 16px;
  line-height: 1.5;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  margin-top: 97px;
  @media (max-width: ${config.mobileMQ}) {
    margin-top: 60px;
  }
`

class MainLayout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>
            {this.props.title || 'GLOSSBOSS'} -{' '}
            {this.props.subTitle || 'Dein Autopflege Blog'}
          </title>
        </Helmet>
        <Main>
          <NavBar links={config.navbarLinks} />
          <HeaderImage {...this.props} />
          <ShopAd />
          <ContentWrapper>{this.props.children}</ContentWrapper>
          <Footer />
        </Main>
      </React.Fragment>
    )
  }
}
export default MainLayout
