import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectTotalPrice = createSelector(
  [selectCart],
  cart => cart.cartItems.reduce((accu, item) => accu + (item.quantity * item.price), 0)
)