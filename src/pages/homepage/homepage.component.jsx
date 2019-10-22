import React from 'react';

import * as S from './homepage.styles';
import DirectoryContainer from '../../components/directory/directory.container';

const HomePage = () => {

  return (
    <S.Container>
      <S.H3>Brands</S.H3>
      <DirectoryContainer />
    </S.Container>
  )
}

export default HomePage;