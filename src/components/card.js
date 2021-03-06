import Link from 'gatsby-link'
import { css, keyframes } from '@emotion/core'
import styled from '@emotion/styled'

import config from '../config'

const showCard = keyframes`
0% {
  transform: scale(.95);
  opacity: 0;
  top: 70px;
    position: relative;
}
100% {
  transform: scale(1);
  opacity: 1;
  top: 0px;
  position: relative;
}
`

export const CardStyle = css`
  transition: 100ms ease-in-out;
  &:hover {
    background: #f8fcff;
  }
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 2px 2px 12px #d4d4d4, -5px -5px 15px #ffffff;
`

export const Cards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`
export const CardItem = styled.li`
  display: flex;
  width: 100%;
  padding: 1rem;
  margin: ${props => props.isPost && '0 auto'};
  @media (min-width: 45rem) {
    width: 50%;
  }
  @media (min-width: 66rem) {
    width: ${props => !props.isPost && '33.3333%'};
  }
  animation: ${showCard} 700ms ease-in-out 1;
`
export const Card = styled.div`
  ${CardStyle};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  a {
    text-decoration: none;
  }
`
export const CardContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
`
export const CardImage = styled(Link)`
  background-image: url("${props => props.image && props.image}");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  overflow: hidden;
  position: relative;
  transition: filter 0.5s cubic-bezier(.43,.41,.22,.91);
  box-shadow: 1px 2px 5px #dddddd;
  &::before {
    content: "";
    display: block;
    padding-top: ${props => (props.isPost ? '30%' : '56.25%')};
  }
`
export const CardImageExternal = CardImage.withComponent('div')

export const CardTitle = styled(Link)`
  color: ${config.linkColor};
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 2px;
  text-decoration: none;
`
export const CardTitleExternal = CardTitle.withComponent('div')
export const CardText = styled.p`
  flex: ${props => (props.isMeta ? '' : '1 1 0')};
  font-size: 15px;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  color: ${config.darkGray};
  margin-top: ${props => (props.isMeta ? '0' : '')};
  border-bottom: ${props => (props.isMeta ? `${config.lightBorder}` : '')};
  a {
    color: ${config.darkerGray};
    &:hover {
      color: ${config.glossbossBlue};
    }
  }
`
export const CardSubTitle = styled(CardText)`
  font-size: 16px;
`
export const CardButton = styled(Link)`
  text-decoration: none;
  background-color: ${config.lighterGray};
  color: ${config.glossbossBlue};
  padding: 0.5rem;
  text-transform: uppercase;
  text-align: center;
  display: block;
  width: 100%;
  margin: ${props => (props.isLoadMore ? '50px 0' : '25px 0 15px 0')};
  border-radius: 7px;
  background: #f6f6f6;
  box-shadow: 1px 1px 5px #dddddd, -1px -1px 5px #ffffff;
  transition: 200ms;
  &:hover {
    box-shadow: 5px 5px 5px #dddddd, -5px -5px 5px #ffffff;
  }
`
export const CardButtonExternal = CardButton.withComponent('div')

export const CardLinkAd = styled.a`
  display: contents;
`
