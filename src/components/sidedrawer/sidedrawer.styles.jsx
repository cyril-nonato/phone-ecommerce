import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const positionShow = css`
  transform: translateX(0);
`;

export const positionHide = css`
  transform: translateX(100%)
`;

const checkPosition = (props) => {
  if(props.showSideDrawer) {
    return positionShow
  } else {
    return positionHide
  }
};


export const SideDrawerContainer = styled.div`
  position: fixed;
  width: 70%;
  background-color: rgba(0,0,0, .8);;
  top: 0;
  right: 0;
  height: 100vh;
  color: white;
  text-transform: uppercase;
  z-index: 10;
  transition: all .3s ease-in-out;
  ${checkPosition}
`;

export const ContentContainer = styled.div`
  padding-top: 4rem;
`;

export const H3 = styled.h3`
  font-size: 2.2rem;
  padding-right: 1rem;
  letter-spacing: 1px;
  text-align: right;
`;

export const List = styled.ul`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  list-style: none;
`;

export const Item = styled.li`
  width: 100%;
`;

const LinkStyle = css`
  width: 100%;
  text-align: right;
  display: block;
  text-decoration: none;
  padding: 1rem 0;
  padding-right: 1.5rem;
  font-size: 1.8rem;
  background: linear-gradient(30deg, transparent 0%, transparent 50%, white 50%);
  background-size: 230%;
  transition: all .3s;

  &:link,
  &:visited {
    color: white;
  }

  &:hover {
    cursor: pointer;
    background-position: 100%;
    color: black;
  }

`;

export const Link = styled(NavLink)`
  ${LinkStyle}
`;

export const ButtonLink = styled.div`
  ${LinkStyle}
`;