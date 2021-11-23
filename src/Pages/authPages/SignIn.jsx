import React from 'react';
import { Link } from 'react-router-dom';
import MainAuth from '../../features/Auth/MainAuth';
import MainWrapper from '../../features/Auth/MainWrapper';
import Footer from '../../features/Auth/Footer';
import FormSignIn from '../../features/Auth/FormSignIn/form.sign.in';
import Paragraph from '../../components/Paragraph';
import LinkToPage from '../../components/LinkToPage';
import { DICTIONARY } from '../../core/consts/dictionary';

const SignIn = () => {
  document.title = DICTIONARY.authForm.signIn;
  return (
    <MainAuth>
      <MainWrapper>
        <FormSignIn />
        <Footer>
          <Paragraph variant="plain-2" font="regular" color="#A1ABC9">{DICTIONARY.authForm.dontHaveAccount}</Paragraph>
          <Link to="/sign-up">
            <LinkToPage variant="auth">
              {DICTIONARY.authForm.signUp}
            </LinkToPage>
          </Link>
        </Footer>
      </MainWrapper>
    </MainAuth>
  );
};

export default SignIn;
