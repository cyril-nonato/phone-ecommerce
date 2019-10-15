import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems, selectTotalPrice } from '../../redux/cart/cart.selector';

import * as S from './cart-page.styles';
import CartItem from '../../components/cart-item/cart-item.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const CartPage = () => {

  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const currentUser = useSelector(selectCurrentUser);

  return ( 
    <S.Container>
      <S.H3>Your cart items</S.H3>
      <S.Descriptions>
        <span>No.</span>
        <span>Phone Image</span>
        <span>Model</span>
        <span>Quantity</span>
        <span>Price</span>
      </S.Descriptions>
      <S.List>
        {
          !cartItems.length && <span>Empty cart</span>
        }
        {
          cartItems.map((item, index) => <CartItem index={index+1} key={item.id} item={item} />)
        }
      </S.List>
      <S.PriceContainer>
        <span>Total Price: <strong>$ {totalPrice.toFixed(2)}</strong></span>
      </S.PriceContainer>
      <S.ButtonContainer>
        {
          currentUser && <CustomButton text='Checkout now' />
        }
        {
          !currentUser && <CustomButton isLink to='/sign-in' text='Sign-in to check-out' />
        }
      </S.ButtonContainer>
    </S.Container>
   );
}
 
export default CartPage;