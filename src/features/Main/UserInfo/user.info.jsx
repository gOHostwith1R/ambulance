import React from 'react';
import { UserInfoStyled } from './user.info.styled';

const UserInfo = ({ children }) => (
  <UserInfoStyled>
    {children}
  </UserInfoStyled>
);

export default UserInfo;
