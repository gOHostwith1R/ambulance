import React from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from 'react-use';
import MainAuth from '../MainAuth';
import MainWrapper from '../MainWrapper';
import FormSignUp from '../FormSignUp';
import Footer from '../../../components/Footer';
import Paragraph from '../../../components/Paragraph';
import LinkToPage from '../../../components/LinkToPage';
import { DICTIONARY } from '../../../core/consts/dictionary';

const SignUp = () => {
  useTitle(DICTIONARY.authForm.signUp);
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
