import React from 'react';
import { IndicatorStyled } from './indicator.styled';

const Indicator = ({ variant, status }) => (
  <IndicatorStyled variant={variant} status={status} />
);

export default Indicator;
