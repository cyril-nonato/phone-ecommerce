import React from 'react';
import { useSelector } from 'react-redux';
import { selectCollectionsAndItemsToMap } from '../../redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.component';

import * as S from './collection-overview.styles';

const CollectionOverview = () => {

  const collectionsMap = useSelector(selectCollectionsAndItemsToMap);

  return (
    <S.Container>
      {
        collectionsMap.map(collection =>
          <CollectionPreview key={collection.id} collection={collection} />
        )
      }
    </S.Container>
  )
}

export default CollectionOverview;

