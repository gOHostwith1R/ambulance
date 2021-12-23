import React from 'react';
import { NotFoundWrapper } from './components/NotFoundWrapper';
import { Title } from '../../components';

export const NotFoundPage = () => (
  <NotFoundWrapper>
    <Title variant="h1" color="#A1ABC9">
      Oops...
      We can’t seem to find the page you are looking for.
    </Title>
  </NotFoundWrapper>
);
