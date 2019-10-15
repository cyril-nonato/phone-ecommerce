import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyleLink = styled(Link)`
  width: 60%;

  @media screen and (min-width: 700px) {
    width: 100%;
  }
`;

export const H4 = styled.h4`
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
`;

export const Image = styled.img`
  height: 100%;
  display: block;
  margin: 0 auto;
`;

export const Price = styled.div`
  margin: 1rem 0;
  text-align: center;
  font-size: 1.4rem;
`;

export const ImageContainer = styled.div`
  height: 28rem;
  margin: 0 auto;
`;