import styled from 'styled-components';

import {Link} from 'react-router-dom';

export const Container = styled.div`

  button {
    width: 40%;
  }

  @media screen and (min-width: 700px) {
    width: 70%;
    margin: 0 auto;
  }

  @media screen and (min-width: 900px) {
    width: 50%;
  }

  @media screen and (min-width: 1800px) {
    width: 30%;
  }
`

export const H3 = styled.h3`
  font-size: 2rem;
  text-transform: uppercase;
`

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;

export const SignInLink = styled(Link)`

  margin-top: 2rem;
  display: block;

  &:link,
  &:visited {
    text-decoration: none;
    font-size: 1.7rem;
    color: black;
  }
`;

export const Error = styled.p`
  padding: 1rem;
  font-size: 1.6rem;
  color: red;
  display: flex;
  justify-content: center;
`;
