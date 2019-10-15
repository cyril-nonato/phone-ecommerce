import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCollectionByBrandNameStart } from '../../redux/shop/shop.actions';
import CollectionContainer from '../../components/collection/collection.container';
import { selectCollection } from '../../redux/shop/shop.selector';

const checkCollectionBrand = (collection) => collection ? collection.id : null;

const CollectionPage = ({ match }) => {
  const { params: { brandName } } = match;
  const dispatch = useDispatch();
  const collection = useSelector(selectCollection);
  const id = checkCollectionBrand(collection);
  
  useEffect(() => {

    if (id !== brandName) {
      dispatch(getCollectionByBrandNameStart(brandName))
    }
  }, [brandName, dispatch, id]);

  return (
    <CollectionContainer />
  );
}

export default CollectionPage;

// useEffect(() => {
//   dispatch(getCollectionByBrandNameStart(brandName))
//   // if (!collections && id !== brandName) {
//   //   dispatch(getCollectionByBrandNameStart(brandName))
//   // }
//   // if (collections && id !== brandName) {
//   //   dispatch(getCollectionInCollectionsStart(collections, brandName))
//   // }

// }, [brandName, collections, dispatch, id, error]);