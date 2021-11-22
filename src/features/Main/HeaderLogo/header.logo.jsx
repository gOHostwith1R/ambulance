import React from 'react';
import Logo from '../../../assets/svg/logo.svg';
import Title from '../../../components/Title';
import FlexContainer from '../../../components/FlexContainer';

const HeaderLogo = () => (
  <FlexContainer gap="14px">
    <img src={Logo} alt="logo" />
    <Title variant="title">
      PALM CLINIC
    </Title>
  </FlexContainer>
);

export default HeaderLogo;
