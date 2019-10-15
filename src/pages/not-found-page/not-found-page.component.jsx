import React from 'react'

import * as S from './not-found-page.styles';
import sadFace from '../../assets/sad-face.svg';

const NotFoundPage = () => {
  return (
    <S.Container>
      <S.ErrorImage src={sadFace} alt="Smiley" />
      <S.ShortDescription>404 Page not found</S.ShortDescription>
      <S.LongDescription>The Page you're looking for cannot be found</S.LongDescription>
    </S.Container>
  )
}

export default NotFoundPage;