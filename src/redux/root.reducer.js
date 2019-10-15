import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist';

import userReducer from './user/user.reducer';
import navigationReducer from './navigation/navigation.reducer';
import shopReducer from './shop/shop.reducer';
import homeReducer from './home/home.reducer';
import cartReducer from './cart/cart.reducer';
import commentsReducer from './comments/comments.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'shop', 'cart', 'comments']
}

const rootReducer =  combineReducers({
  user: userReducer,
  navigation: navigationReducer,
  shop: shopReducer,
  home: homeReducer,
  cart: cartReducer,
  comments: commentsReducer
});

export default persistReducer(persistConfig, rootReducer)