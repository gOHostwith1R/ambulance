import React from 'react';
import { Link } from 'react-router-dom';
import MainAuth from '../../features/Auth/MainAuth';
import MainWrapper from '../../features/Auth/MainWrapper';
import FormSignUp from '../../features/Auth/FormSignUp';
import Footer from '../../features/Auth/Footer';
import Paragraph from '../../components/Paragraph';
import LinkToPage from '../../components/LinkToPage';
import { DICTIONARY } from '../../core/consts/dictionary';

const SignUp = () => {
  document.title = DICTIONARY.authForm.signUp;
  return (
    <MainAuth>
      <MainWrapper>
        <FormSignUp />
        <Footer>
          <Paragraph variant="plain-2" font="regular" color="#A1ABC9">{DICTIONARY.authForm.haveAccount}</Paragraph>
          <Link to="/sign-in">
            <LinkToPage variant="auth">
              {DICTIONARY.authForm.signIn}
            </LinkToPage>
          </Link>
        </Footer>
      </MainWrapper>
    </MainAuth>
  );
};

export default SignUp;
