import React from 'react'

import * as S from './custom-button.styles';

const CustomButton = ({text, isGoogleSignIn, type, click, isLink, to}) => {

  if(isLink) {
    return <S.ButtonLink data-testid="isLink" to={to}>{text}</S.ButtonLink>
  }

  return ( 
    <S.Button data-testid="default" onClick={click} type={type} isGoogleSignIn={isGoogleSignIn}>{text.toUpperCase()}</S.Button>
  );
}
 
export default CustomButton;