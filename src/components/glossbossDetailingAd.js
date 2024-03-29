import React from 'react'
import styled from '@emotion/styled'

const Card = styled.div`
  padding: 1rem;
  margin: 16px;
  box-sizing: border-box;
  background: linear-gradient(#130027, #130027),
    linear-gradient(135deg, #ff5200, #bf0bbf);
  border: 5px solid transparent;
  background-repeat: no-repeat;
  background-origin: padding-box, border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  background-color: #130027;
  color: #d6f0ff;
  letter-spacing: 1.2px;
  font-weight: 400;
`
export default () => (
  // <Card>
  //   Du möchtest dein Auto von uns mit einer Keramikversiegelung veredeln lassen?{' '}
  //   <a href="https://detailing.glossboss.de">
  //     Besuche unsere Detailing Website!
  //   </a>
  // </Card>
  <Card>
    <span role="img" aria-label="hey!">
      🙋🏻‍♂️
    </span>{' '}
    pssss hey! Wusstest du schon? Mit dem Code <strong>glossboss</strong>{' '}
    bekommst du als Endkunde ab einen Warenwert von 50€{' '}
    <strong>10% Rabatt</strong> auf{' '}
    <a
      target="_blank"
      href="https://glossboss.de/?ref=papa"
      rel="noopener noreferrer"
    >
      glossboss.de
    </a>{' '}
    <span role="img" aria-label="Herz">
      ❤️
    </span>
  </Card>
)
