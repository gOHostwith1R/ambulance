import React from 'react';
import { EmptyStateStyled } from './empty.state.styled';
import EmptyIcon from '../../../assets/svg/medical-history-icon.svg';
import Paragraph from '../../../components/Paragraph';

const EmptyState = () => (
  <EmptyStateStyled>
    <img src={EmptyIcon} alt="empty-icon" />
    <Paragraph variant="plain-2" font="regular" color="#A1ABC9" textAlign="center">
      You have no patients yet. To create a
      patient profile, please contact your administrator.
    </Paragraph>
  </EmptyStateStyled>
);

export default EmptyState;
