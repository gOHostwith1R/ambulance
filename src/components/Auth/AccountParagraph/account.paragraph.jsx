import React from 'react';
import { AccountParagraphStyled } from './account.paragraph.styled';

const AccountParagraph = ({ children, marginEmail }) => (
  <AccountParagraphStyled marginEmail={marginEmail}>
    {children}
  </AccountParagraphStyled>
);

export default AccountParagraph;
