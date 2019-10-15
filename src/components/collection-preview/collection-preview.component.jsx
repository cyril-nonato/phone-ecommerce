import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as S from './collection-preview.styles';
import CollectionItem from '../collection-item/collection-item.component';
import { selectWindowInnerWidth } from '../../redux/navigation/navigation.selectors';

const CollectionPreview = ({collection, match: { path }}) => {
  
  const windowWidth = useSelector(selectWindowInnerWidth);

  const [numOfPhones, setNumOfPhones] = useState(2);
  useEffect(() => {
    if(windowWidth > 900) {
      setNumOfPhones(4)
    } else {
      setNumOfPhones(2)
    }
  }, [windowWidth])
  
  return (
    <S.Container>
      <S.H3>{collection.brand}</S.H3>
      <S.List>
        {
          Object.keys(collection.items)
            .filter((key, index) => index < numOfPhones)
            .map(key => <CollectionItem brand={collection.brand} key={key} item={collection.items[key]} />)
        }
      </S.List>
      <S.ShowMoreLink to={`${path}/${collection.brand.toLowerCase()}`}>Show more...</S.ShowMoreLink>
    </S.Container>
  );
}

export default withRouter(CollectionPreview);