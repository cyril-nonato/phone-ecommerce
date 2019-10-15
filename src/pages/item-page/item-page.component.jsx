import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItemStart } from '../../redux/shop/shop.actions';
import ItemContainer from '../../components/item/item.container';
import { selectItem } from '../../redux/shop/shop.selector';

const checkItem = (item) => {
  return item ? item.itemRoute : null
}

const ItemPage = ({ match }) => {
  const { params: { brandName, model } } = match;
  const dispatch = useDispatch();
  const item = useSelector(selectItem);

  useEffect(() => {
    const itemRoute = checkItem(item);
    if (itemRoute !== model) dispatch(getItemStart(brandName, model))
  }, [brandName, model, dispatch, item]);

  return (
    <ItemContainer />
  );
}

export default ItemPage;

// useEffect(() => {
//   if (collection && itemRoute !== model && !error) dispatch(getItemInCollectionStart(collection, model))
// }, [collection, model, dispatch, itemRoute, error])
