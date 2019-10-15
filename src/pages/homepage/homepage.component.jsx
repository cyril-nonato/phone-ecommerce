import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Directory from '../../components/directory/directory.component';

import * as S from './homepage.styles';
import { shopCleanUpError } from '../../redux/shop/shop.actions';


const HomePage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(shopCleanUpError())

    return () => {
      console.log('unmount');
    }
  }, [dispatch])

  return (
    <S.Container>
      <S.H3>Brands</S.H3>
      <Directory />
    </S.Container>
  )
}

export default HomePage;