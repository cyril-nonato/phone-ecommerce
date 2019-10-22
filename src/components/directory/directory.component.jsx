import React from 'react'
import DirectoryItem from '../directory-item/directory-item.component';

import * as S from './directory.styles';

const Directory = ({sections}) => {
  return ( 
    <S.Container>
      {
        Object.keys(sections).map(key => <DirectoryItem key={sections[key].id} item={sections[key]} />)
      }
    </S.Container>
   );
}
 
export default Directory;