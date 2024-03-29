import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectItem } from '../../redux/shop/shop.selector';

import CustomButton from '../custom-button/custom-button.component';

import * as S from './item.styles';
import { selectShowComments } from '../../redux/comments/comments.selector';
import { getCommentsStart } from '../../redux/comments/comments.actions';
import ItemCommentsContainer from '../item-comments/item-comments.container';

const Item = ({ match }) => {
  const { params: { brandName, model } } = match;
  const dispatch = useDispatch();

  const item = useSelector(selectItem);
  const showComment = useSelector(selectShowComments);

  const { name, imageUrl, status, battery, memory, price } = item;

  return (
    <S.Container>
      <S.H3>{name}</S.H3>
      <S.Grid>
        <S.Image src={imageUrl} alt={name} />
        <S.Status>
          <S.Description>Status:</S.Description>
          <S.Value>{status}</S.Value>
        </S.Status>
        <S.Battery>
          <S.Description>Battery:</S.Description>
          <S.Value>{battery}</S.Value>
        </S.Battery>
        <S.Memory>
          <S.Description>Memory:</S.Description>
          <S.Value>{memory}</S.Value>
        </S.Memory>
        <S.Price>
          <S.Description>Price:</S.Description>
          <S.Value>${price.toFixed(2)}</S.Value>
        </S.Price>
        <S.ButtonContainer>
          <CustomButton type='button' text='Add to Cart' />
        </S.ButtonContainer>
        {
          !showComment &&
          <S.LoadComments onClick={() => dispatch(getCommentsStart(brandName, model))}>load comments</S.LoadComments>
        }
        {
          showComment &&
          <S.CommentsContainer>
            <ItemCommentsContainer />
          </S.CommentsContainer>
        }
      </S.Grid>
    </S.Container>
  );
}

export default withRouter(Item);