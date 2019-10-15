import React from 'react'
import { useSelector } from 'react-redux';
import { selectSections } from '../../redux/home/home.selector';
import DirectoryItem from '../directory-item/directory-item.component';

import * as S from './directory.styles';

const Directory = () => {
  const sections = useSelector(selectSections);
  return ( 
    <S.Container>
      {
        Object.keys(sections).map(key => <DirectoryItem key={sections[key].id} item={sections[key]} />)
      }
    </S.Container>
   );
}
 
export default Directory;