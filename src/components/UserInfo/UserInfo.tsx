import React from 'react';
import { UserInfoStyled } from './UserInfo.styled';
import { UserInfoProps } from './types';

export const UserInfo: React.FC <UserInfoProps> = ({ children }) => (
  <UserInfoStyled>
    {children}
  </UserInfoStyled>
);
