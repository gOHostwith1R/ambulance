import React from 'react';
import { HeaderLogoStyled } from './header.logo.styled';
import Image from '../../../components/Main/Image';
import TitleText from '../../../components/Main/TitleText';

const HeaderLogo = () => (
  <HeaderLogoStyled>
    <Image logo />
    <TitleText />
  </HeaderLogoStyled>
);

export default HeaderLogo;
