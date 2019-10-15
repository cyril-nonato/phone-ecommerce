import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FormInput from '../form-input/form-input.component'

import * as S from './sign-up.styles';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';
import { selectUserError } from '../../redux/user/user.selectors';

const SignUp = () => {
  const [value, setValue] = useState({
    email: '',
    displayName: '',
    password: '',
    confirm_password: '',
  });
  const dispatch = useDispatch();

  const error = useSelector(selectUserError);

  const handleChange = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.password === value.confirm_password) {
      const { email, displayName, password } = value;
      const details = {
        email,
        displayName,
        password
      }
      dispatch(signUpStart(details))
    } else {
      setPasswordError(`Passwords doesn't match`)
    }
  }

  return (
    <S.Container>
        <S.H3>Sign Up</S.H3>
        <S.Error>{error}</S.Error>
        <S.Error>{passwordError}</S.Error>
        <S.Form onSubmit={handleSubmit}>
          <FormInput
            onChange={handleChange}
            type='text'
            label='Full Name'
            name="displayName"
          />
          <FormInput
            onChange={handleChange}
            type='email'
            label='email'
            name="email"
          />
          <FormInput
            onChange={handleChange}
            type='password'
            label='password'
            name='password'
          />
          <FormInput
            onChange={handleChange}
            type='password'
            label='confirm password'
            name='confirm_password'
          />
          <CustomButton text='Sign up' type='submit' />
        </S.Form>
        <S.SignInLink to="/sign-in">Have an account? Click here</S.SignInLink>
    </S.Container>
  );
}

export default SignUp;