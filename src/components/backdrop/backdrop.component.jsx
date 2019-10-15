import React from 'react'
import * as S from './backdrop.styles';

const Backdrop = ({ click }) => {
  return (
    <S.BackdropContainer onClick={click} />
  );
}

export default Backdrop;