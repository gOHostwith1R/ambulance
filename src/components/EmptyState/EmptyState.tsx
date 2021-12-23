import React from 'react';
import { EmptyStateStyled } from './EmptyState.styled';
import EmptyIcon from '../../assets/svg/medical-history-icon.svg';
import { Paragraph } from '../Paragraph';

export const EmptyState = () => (
  <EmptyStateStyled>
    <img src={EmptyIcon} alt="empty-icon" />
    <Paragraph variant="plain-2" font="regular" color="#A1ABC9">
      You have no patients yet. To create a
      patient profile, please contact your administrator.
    </Paragraph>
  </EmptyStateStyled>
);
