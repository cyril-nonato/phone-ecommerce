import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media only screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5rem;
  }
`;