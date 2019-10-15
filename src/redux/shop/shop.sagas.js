import { takeLatest, call, put, all } from 'redux-saga/effects';
import actionTypes from './shop.types';
import { firestore, convertQuerySnapshotToObj } from '../../firebase/firebase.utils';
import { getCollectionsSuccess, queryFailure, getCollectionByBrandNameSuccess, getItemSuccess} from './shop.actions';

import { addItemRouteToCollectionsItems, addItemRouteToCollectionItems } from './shop.utils'

function* getCollectionsAsync() {
  try {
    const collectionRef = yield firestore.collection('collections');
    const querySnapshot = yield collectionRef.get()
    const collectionData = yield call(convertQuerySnapshotToObj, querySnapshot);
    const updatedCollectionData = yield call(addItemRouteToCollectionsItems, collectionData);
    yield put(getCollectionsSuccess(updatedCollectionData))
  } catch (error) {
    yield put(queryFailure(error.message));
  }
}

function* getCollectionsStart() {
  yield takeLatest(actionTypes.GET_COLLECTIONS_START, getCollectionsAsync)
}

function* getCollectionByBrandNameStartAsync({ payload }) {
  try {
    const docRef = yield firestore.collection('collections').doc(payload.toLowerCase());
    const querySnapshot = yield docRef.get();

    if (!querySnapshot.exists) {
      yield put(queryFailure('Error not found'));
    }
    const collection = yield addItemRouteToCollectionItems(querySnapshot.data());
    yield put(getCollectionByBrandNameSuccess(collection));
    
  } catch (error) {
    yield put(queryFailure(error.message));
  }
}

function* getCollectionsByBrandNameStart() {
  yield takeLatest(actionTypes.GET_COLLECTION_BY_BRAND_NAME_START, getCollectionByBrandNameStartAsync)
}

function* getItemStartAsync({ payload: { brandName, model } }) {
  try {
    const brandNameFilter = brandName.toLowerCase();
    const modelFilter = model.toLowerCase();
    const docRef = yield firestore.collection('collections').doc(brandNameFilter);
    const querySnapshot = yield docRef.get();
    if (!querySnapshot.exists) {
      yield put(queryFailure('Error not found'));
    }

    const item = yield querySnapshot.data().items[modelFilter];
    const updatedItem = {...item, 'itemRoute': model};

    if (!!item) {
      yield put(getItemSuccess(updatedItem));
    } else {
      yield put(queryFailure('Error not found'));
    }

  } catch (error) {
    yield queryFailure(error.message);
  }
}

function* getItemStart() {
  yield takeLatest(actionTypes.GET_ITEM_START, getItemStartAsync)
}

function* shopSagas() {
  yield all([
    call(getCollectionsStart),
    call(getCollectionsByBrandNameStart),
    call(getItemStart),
  ])
};

export default shopSagas;