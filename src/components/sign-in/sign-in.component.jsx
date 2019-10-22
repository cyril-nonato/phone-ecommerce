import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import * as S from './sign-in.styles';

const SignIn = ({error, googleSignInStart, emailSignInStart}) => {

  const [userCreds, setUserCreds] = useState({ email: '', password: '' })

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = userCreds;
    emailSignInStart(email, password)
  }

  const handleChange = e => {
    setUserCreds({
      ...userCreds,
      [e.target.name]: e.target.value
    })
  }

  return (
    <S.Container>
      <S.H3>Sign In</S.H3>

      <S.Error>{error}</S.Error>

      <S.Form onSubmit={handleSubmit}>
        <FormInput
          onChange={handleChange}
          type='email'
          name='email'
          label='email' />
        <FormInput
          onChange={handleChange}
          type='password'
          name='password'
          label='password' />
        <S.ButtonContainer>
          <CustomButton type='submit' text="Sign-in" />
          <CustomButton click={() => googleSignInStart()}
            type='button'
            isGoogleSignIn
            text="Sign-in with google" />
        </S.ButtonContainer>
      </S.Form>
      <S.SignUpLink to='/sign-up'>Don't have an account? Click here</S.SignUpLink>
    </S.Container>
  );
}

export default SignIn;