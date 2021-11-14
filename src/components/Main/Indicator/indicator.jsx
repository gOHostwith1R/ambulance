import React from 'react';
import { IndicatorStyled } from './indicator.styled';

const Indicator = ({ color, avatar, status }) => (
  <IndicatorStyled color={color} avatar={avatar} status={status} />
);

export default Indicator;
