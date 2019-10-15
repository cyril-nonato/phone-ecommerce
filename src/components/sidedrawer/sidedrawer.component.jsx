import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Backdrop from '../backdrop/backdrop.component';
import { signOutStart } from '../../redux/user/user.actions';
import { toggleSidedrawer } from '../../redux/navigation/navigation.actions';

import * as S from './sidedrawer.styles';
import { selectToggleSidedrawer } from '../../redux/navigation/navigation.selectors';

const Sidedrawer = ({ navLinks, currentUser, checkForSidedrawer, match }) => {
  const { sign_in, sign_up, sign_out, ...otherLinks } = navLinks

  const dispatch = useDispatch();

  const showSideDrawer = useSelector(selectToggleSidedrawer);

  const handleSideDrawer = e => {
    if(e.target.tagName === 'A') {
      dispatch(toggleSidedrawer())
    }
  }

  return (
    <React.Fragment>
      {
        showSideDrawer &&
        <Backdrop click={() => dispatch(toggleSidedrawer())} />
      }

      <S.SideDrawerContainer onClick={handleSideDrawer} showSideDrawer={showSideDrawer} checkForSidedrawer={checkForSidedrawer}>
        <S.ContentContainer>
          <S.H3>
            {currentUser && currentUser.displayName}
            {!currentUser && 'Menu'}
          </S.H3>
          <S.List>
            {
              Object.keys(otherLinks).map((key, index) =>
                <S.Item key={index}>
                  <S.Link to={otherLinks[key].route}>
                    {navLinks[key].name}
                  </S.Link>
                </S.Item>
              )
            }
            {
              currentUser
              &&
              <S.Item>
                <S.ButtonLink onClick={() => dispatch(signOutStart())}>
                  {sign_out.name}
                </S.ButtonLink>
              </S.Item>
            }
            {
              !currentUser
              &&
              <S.Item>
                <S.Link to={sign_in.route}>
                  {sign_in.name}
                </S.Link>
              </S.Item>
            }
            {
              !currentUser &&
              <S.Item>
                <S.Link to={sign_up.route}>
                  {sign_up.name}
                </S.Link>
              </S.Item>
            }
          </S.List>
        </S.ContentContainer>
      </S.SideDrawerContainer>

    </React.Fragment>
  );
}

export default withRouter(Sidedrawer);