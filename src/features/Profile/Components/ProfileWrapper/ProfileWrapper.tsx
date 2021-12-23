import React from 'react';
import { ProfileWrapperStyled } from './ProfileWrapper.styled';
import { ProfileWrapperTypes } from './types';

export const ProfileWrapper = ({ children }: ProfileWrapperTypes) => (
  <ProfileWrapperStyled>
    {children}
  </ProfileWrapperStyled>
);
