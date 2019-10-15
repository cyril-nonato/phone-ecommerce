import { createSelector } from 'reselect';
import { convertCollectionItemsToMap, convertCollectionsAndItemsToMap } from './shop.utils';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections ?  shop.collections : null
);

export const selectCollectionsAndItemsToMap = createSelector(
  [selectCollections],
  collections => convertCollectionsAndItemsToMap(collections)
);

export const selectCollection = createSelector(
  [selectShop],
  shop => shop.collection ? shop.collection : null
);

export const selectCollectionMap = createSelector(
  [selectCollection],
  collection => convertCollectionItemsToMap(collection)
);

export const selectItem = createSelector(
  [selectShop],
  shop => shop.item
);

export const selectShopLoading = createSelector(
  [selectShop],
  shop => shop.loading
);

export const selectCollectionsIsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);

export const selectCollectionIsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collection
);

export const selectItemIsLoaded = createSelector(
  [selectShop],
  shop => !!shop.item
);

export const selectShopError = createSelector(
  [selectShop],
  shop => shop.error
);