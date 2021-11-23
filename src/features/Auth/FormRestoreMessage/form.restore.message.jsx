import React from 'react';
import { Link } from 'react-router-dom';
import { FormStyled } from '../../../components/Form/form.styled';
import FlexContainer from '../../../components/FlexContainer';
import arrowLeftIcon from '../../../assets/svg/arrow-left-gray.svg';
import Title from '../../../components/Title';
import Paragraph from '../../../components/Paragraph';
import LinkToPage from '../../../components/LinkToPage';
import { DICTIONARY } from '../../../core/consts/dictionary';

const FormRestoreMessage = () => (
  <FormStyled>
    <FlexContainer gap="16px" margin="0 0 32px 0">
      <Link to="sign-up">
        <img src={arrowLeftIcon} alt="arrow-left" />
      </Link>
      <Title variant="h1">
        {DICTIONARY.authForm.restorePassword}
      </Title>
    </FlexContainer>
    <Paragraph variant="plain-2" font="regular" color="#A1ABC9" textAlign="start">
      An email has been sent to
      <LinkToPage variant="auth" display="inline-block" margin="0 0 0 3px">example@exam.com</LinkToPage>
      {DICTIONARY.authForm.restoredPasswordText}
    </Paragraph>
  </FormStyled>
);

export default FormRestoreMessage;
