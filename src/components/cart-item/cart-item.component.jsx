import React from 'react'
import { useDispatch } from 'react-redux';
import * as S from './cart-item.styles';
import { addItemToCart, removeItemFromCart, removeItemCompletelyFromCart } from '../../redux/cart/cart.actions';

const CartItem = ({ item, index }) => {

  const { imageUrl, name, price, quantity } = item;

  const dispatch = useDispatch();

  return (
    <S.Item>
      <S.Index>{index}</S.Index>
      <S.Image src={imageUrl} alt={name} />
      <S.Name>{name}</S.Name>
      <S.QuantityContainer>
        <S.QuantitySpan onClick={() => dispatch(removeItemFromCart(item))}>&#10094;</S.QuantitySpan>
        <S.QuantityValue>{quantity}</S.QuantityValue>
        <S.QuantitySpan onClick={() => dispatch(addItemToCart(item))}>&#10095;</S.QuantitySpan>
      </S.QuantityContainer>
      <S.Price>{price.toFixed(2)}</S.Price>
      <S.Remove onClick={() => dispatch(removeItemCompletelyFromCart(item))}>&#10005;</S.Remove>
    </S.Item>
  );
}

export default CartItem;