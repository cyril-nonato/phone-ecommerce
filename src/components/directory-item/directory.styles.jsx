import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  align-items: center;
  margin-bottom: 5rem;
  text-transform: uppercase;
  font-size: 1.8rem;
  padding: 1rem 0;
  transition: all .3s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:link,
  &:visited {
    text-decoration: none;
    color: black;

  }
`;

export const Image = styled.img`
  display: block;
  height: 100px;
  width: 100px;

  @media screen and (min-width: 700px) {
    height: 150px;
    width: 150px;
  }
`;

export const H3 = styled.h3`
  margin-top: 2rem;
`;