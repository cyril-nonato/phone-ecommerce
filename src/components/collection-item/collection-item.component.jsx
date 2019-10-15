import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import * as S from './collection-item.styles';
import CustomButton from '../custom-button/custom-button.component';
import { addItemToCart } from '../../redux/cart/cart.actions';
import { withRouter } from 'react-router-dom';

const CollectionItem = ({ item, match, brand }) => {
  const { name, price, imageUrl, itemRoute } = item;
  const dispatch = useDispatch();
  const {url, params: {brandName}} = match;

  const [linkUrl, setUrl] = useState(`${url}/${brand}/${itemRoute}`);

  useEffect(() => {
    if(brandName) {
      setUrl(`${url}/${itemRoute}`)
    }
  }, [url, brandName, itemRoute])

  return (
    <S.Item>
      <S.StyleLink to={linkUrl}>
        <S.H4>{name}</S.H4>
        <S.ImageContainer>
          <S.Image src={imageUrl} alt={name} />
        </S.ImageContainer>
        <S.Price>Price: <strong>${price.toFixed(2)}</strong></S.Price>
      </S.StyleLink>
      <CustomButton click={() => dispatch(addItemToCart(item))} type='button' text='Add to Cart' />
    </S.Item>
  );
}

export default withRouter(CollectionItem);