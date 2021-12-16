import React from 'react';
import { UserInfoStyled } from './UserInfo.styled';

export interface UserInfoProps {
  children?: React.ReactNode | JSX.Element,
}

const UserInfo: React.FC <UserInfoProps> = ({ children }) => (
  <UserInfoStyled>
    {children}
  </UserInfoStyled>
);

export default UserInfo;
