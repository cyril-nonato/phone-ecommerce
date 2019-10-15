import React from 'react'

import * as S from './form-input.styles';

const FormInput = ({name, type, label, onChange}) => {
  return ( 
    <S.Container>
      <S.Input required name={name} onChange={onChange} type={type} placeholder={label} />
      <S.Label>{label}</S.Label>
    </S.Container>
   );
}
 
export default FormInput;