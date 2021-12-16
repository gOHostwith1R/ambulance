import React from 'react';
import { IndicatorStyled } from './Indicator.styled';
import { IndicatorProps } from './types';

const Indicator: React.FC <IndicatorProps> = ({ variant = '', status }) => (
  <IndicatorStyled variant={variant} status={status} />
);

export default Indicator;
