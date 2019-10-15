import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCollectionsStart } from '../../redux/shop/shop.actions';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';

const CollectionOverviewPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCollectionsStart());
  }, [dispatch]);

  return (
    <CollectionOverviewContainer />

  );
}

export default CollectionOverviewPage;