import React from 'react'
import { useSelector } from 'react-redux';
import Toolbar from '../toolbar/toolbar.component'
import Sidedrawer from '../sidedrawer/sidedrawer.component'
import { selectNavLinks, selectToggleSidedrawer } from '../../redux/navigation/navigation.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import * as S from './navigation.styles';

const Navigation = () => {
  const navLinks = useSelector(selectNavLinks);
  const toggleSidedrawer = useSelector(selectToggleSidedrawer)
  const currentUser = useSelector(selectCurrentUser);
  return (
    <S.Container>
      <Toolbar currentUser={currentUser} navLinks={navLinks} />
      <Sidedrawer checkForSidedrawer={toggleSidedrawer} currentUser={currentUser} navLinks={navLinks} />
    </S.Container>
  );
}

export default Navigation;