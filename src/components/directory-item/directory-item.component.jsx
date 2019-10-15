import React from 'react'

import * as S from './directory.styles';

const DirectoryItem = ({item: {logo, name, linkUrl}}) => {

  return ( 
    <S.LinkContainer to={linkUrl}>
      <S.Image src={logo} alt={name} />
      <S.H3>{name}</S.H3>
    </S.LinkContainer>
   );
}
export default DirectoryItem;