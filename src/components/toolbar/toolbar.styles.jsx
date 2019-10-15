import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ToolbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ToggleContainer = styled.div`
  height: 3.5rem;
  width: 5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: 0 3px 5px #ccc;
    cursor: pointer;
  }
`;

export const ToggleIcon = styled.span`
  height: .3rem;
  width: 2.7rem;
  background-color: black;
  display: inline-block;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    height: inherit;
    width: inherit;
    background-color: black;
    display: inline-block;
    top: -.6rem;
  }

  &::after {
    content: '';
    position: absolute;
    height: inherit;
    width: inherit;
    background-color: black;
    display: inline-block;
    top: .6rem;
  }
`;

export const HeaderLink = styled(NavLink)`
  font-size: 2.5rem;
  text-transform: uppercase;
  margin-right: 1rem;
  font-weight: bold;

  &:visited,
  &:link {
    text-decoration: none;
    color: black;
  }
`;

export const List = styled.ul`
  list-style: none;
  font-size: 2rem;
  display: flex;
`;

export const Item = styled.li`
  text-transform: uppercase;
`;

export const Link = styled(NavLink)`

  &:link,
  &:visited {
    text-decoration: none;
    padding: 1rem 1rem;
    color: #000;
  }

  &.active {
    text-decoration: underline;
  }
`;