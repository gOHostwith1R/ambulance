import React from 'react';
import { Link } from 'react-router-dom';
import { FormStyled } from '../../../components/Form/Form.styled';
import arrowLeftIcon from '../../../assets/svg/arrow-left-gray.svg';
import Title from '../../../components/Title';
import Paragraph from '../../../components/Paragraph';
import LinkToPage from '../../../components/LinkToPage';
import { DICTIONARY } from '../../../core/consts/dictionary';
import TitleWrapper from '../TitleWrapper';

const FormRestoreMessage = () => (
  <FormStyled>
    <TitleWrapper withIcon="true">
      <Link to="sign-up">
        <img src={arrowLeftIcon} alt="arrow-left" />
      </Link>
      <Title variant="h1">
        {DICTIONARY.authForm.restorePassword}
      </Title>
    </TitleWrapper>
    <Paragraph variant="plain-2" font="regular" color="#A1ABC9">
      An email has been sent to
      <LinkToPage variant="auth" type="inForgotPassword">example@exam.com</LinkToPage>
      {DICTIONARY.authForm.restoredPasswordText}
    </Paragraph>
  </FormStyled>
);

export default FormRestoreMessage;
