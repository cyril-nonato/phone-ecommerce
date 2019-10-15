import React from 'react'
import { useSelector } from 'react-redux';
import * as S from './collection.styles';
import { selectCollectionMap } from '../../redux/shop/shop.selector';
import CollectionItem from '../collection-item/collection-item.component';

const Collection = () => {

  const collection = useSelector(selectCollectionMap);

  return (
    <S.Container>
      <S.H3>{collection.brand}</S.H3>
      <S.List>
        {
          collection.items.map(item =>
            <CollectionItem key={item.id} item={item} />
          )
        }
      </S.List>
    </S.Container>
  );


}

export default Collection;
