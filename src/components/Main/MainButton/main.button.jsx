import React from 'react';
import { MainButtonStyled } from './main.button.styled';

const MainButton = ({
  children, primary, light, plus, resolutions,
}) => (
  <MainButtonStyled
    primary={primary}
    light={light}
    plus={plus}
    resolutions={resolutions}
  >
    { children }
  </MainButtonStyled>
);

export default MainButton;
