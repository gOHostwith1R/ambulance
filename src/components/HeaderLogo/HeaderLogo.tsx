import React from 'react';
import Logo from '../../assets/svg/logo.svg';
import { Title } from '../Title';
import { HeaderLogoStyled } from './HeaderLogo.styled';

export const HeaderLogo = () => (
  <HeaderLogoStyled>
    <img src={Logo} alt="logo" />
    <Title variant="title">
      PALM CLINIC
    </Title>
  </HeaderLogoStyled>
);
