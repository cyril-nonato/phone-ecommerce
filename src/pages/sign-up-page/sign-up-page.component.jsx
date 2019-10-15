import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as S from '../sign-in-sign-up-styles-shared/sign-in-sign-up.styles';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { clearUserError } from '../../redux/user/user.actions';
import SignUpContainer from '../../components/sign-up/sign-up.container';

const SignUpPage = ({ history }) => {

  const currentUser = useSelector(selectCurrentUser)

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      history.goBack();
    };

    return () => dispatch(clearUserError());

  }, [currentUser, history, dispatch])

  return (
    <S.Container>
      <SignUpContainer />
    </S.Container>
  );
}

export default SignUpPage;