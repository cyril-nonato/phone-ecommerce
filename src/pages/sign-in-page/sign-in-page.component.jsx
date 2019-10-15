import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { clearUserError } from '../../redux/user/user.actions';
import SignInContainer from '../../components/sign-in/sign-in.container';

import * as S from '../sign-in-sign-up-styles-shared/sign-in-sign-up.styles';

const SignInPage = ({history}) => {
  const currentUser = useSelector(selectCurrentUser)

  const dispatch = useDispatch();

  useEffect(() => {
    if(currentUser) {
      history.goBack();
    };

    return () => dispatch(clearUserError());

  }, [currentUser, history, dispatch])

  return (
    <S.Container>
      <SignInContainer />
    </S.Container>
  );
}

export default SignInPage;