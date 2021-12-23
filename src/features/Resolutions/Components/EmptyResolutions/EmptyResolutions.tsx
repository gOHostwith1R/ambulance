import React from 'react';
import { Title } from '../../../../components';
import { EmptyResolutionsStyled } from './EmptyResolutions.styled';

export const EmptyResolutions = (): JSX.Element => (
  <EmptyResolutionsStyled>
    <Title variant="h2" level={2} color="#A1ABC9">Resolutions not found</Title>
  </EmptyResolutionsStyled>
);
