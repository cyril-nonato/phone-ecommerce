import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom'

const googleSignIn = css`
  background-color: #4285F4;
`

const isGoogleSignIn = props => {
  if (props.isGoogleSignIn) {
    return googleSignIn
  }
}

const styles = css`
  padding: 1rem 1rem;
  border: none;
  border-radius: 3px;
  color: #fff;
  background-color: #000;
  font-size: 1.4rem;
  width: inherit;
  text-transform: uppercase;
  text-align: center;
`

export const ButtonLink = styled(Link)`

  &:link,
  &:visited {
    ${styles}
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-2px)
  }

  &:active {
    transform: translateX(0px)
  }
`

export const Button = styled.button`
  ${styles}

  ${isGoogleSignIn}
  transition: all .3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px)
  }

  &:active {
    transform: translateX(0px)
  }
`