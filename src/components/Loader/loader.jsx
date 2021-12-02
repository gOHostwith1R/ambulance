import React from 'react';
import Loader from 'react-loader-spinner';
import { LoaderStyled } from './loader.styled';

const CustomLoader = () => (
  <LoaderStyled>
    <Loader
      type="TailSpin"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />
  </LoaderStyled>
);

export default CustomLoader;
