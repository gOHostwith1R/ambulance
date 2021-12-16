import React from 'react';
import { Link } from 'react-router-dom';
import LinkToPage from '../../../components/LinkToPage';
import { DICTIONARY } from '../../../core/consts/dictionary';
import { ForgotPasswordStyled } from './ForgotPassword.styled';
import { ForgotPasswordProps } from './types';

const ForgotPassword: React.FC <ForgotPasswordProps> = () => (
  <ForgotPasswordStyled>
    <Link to="/restore-password-email">
      <LinkToPage variant="auth">
        {DICTIONARY.authForm.forgotPassword}
      </LinkToPage>
    </Link>
  </ForgotPasswordStyled>
);

export default ForgotPassword;
