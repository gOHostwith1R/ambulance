import React from 'react';
import { TextRoleStatusStyled } from './text.role.status.styled';

const TextRoleStatus = ({ children, status, success }) => (
  <TextRoleStatusStyled status={status} success={success}>
    {children}
  </TextRoleStatusStyled>
);

export default TextRoleStatus;
