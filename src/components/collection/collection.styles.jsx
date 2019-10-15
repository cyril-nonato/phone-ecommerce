import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const H3 = styled.h3`
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 1rem;
  border-bottom: .2rem solid black;
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-gap: 3rem;
  margin-top: 1rem;

  @media screen and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const ShowMoreLink = styled(Link)`

  &:link,
  &:visited {
    margin-top: 1rem;
    text-align: right;
    font-size: 1.8rem;
    color: black;
    display: block;
    text-decoration: none;
  }
`