import React from 'react';
import { EmptyStateStyled } from './empty.state.styled';
import Text from '../../../components/Main/Text';
import Image from '../../../components/Main/Image';
import EmptyIcon from '../../../assets/svg/medical-history-icon.svg';

const EmptyState = () => (
  <EmptyStateStyled>
    <Image emptyIcon={EmptyIcon} />
    <Text emptyState>
      You have no patients yet. To create a
      patient profile, please contact your administrator.
    </Text>
  </EmptyStateStyled>
);

export default EmptyState;
