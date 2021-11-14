import React from 'react';
import MainAuth from '../../containers/Auth/MainAuth';
import MainWrapper from '../../containers/Auth/MainWrapper';
import TitleH2 from '../../components/Auth/TitleH2';
import Footer from '../../containers/Auth/Footer';
import AccountParagraph from '../../components/Auth/AccountParagraph/account.paragraph';
import LinkAuth from '../../components/Auth/LinkAuth';
import FormSignIn from '../../containers/Auth/FormSignIn/form.sign.in';

const SignIn = () => (
  <MainAuth>
    <MainWrapper>
      <FormSignIn>
        <TitleH2>Sign in</TitleH2>
        <LinkAuth to="/restore-password-email" forgot="true">
          Forgot Password?
        </LinkAuth>
      </FormSignIn>
      <Footer>
        <AccountParagraph>Don’t have an account?</AccountParagraph>
        <LinkAuth link="true" to="/sign-up">
          Sign up
        </LinkAuth>
      </Footer>
    </MainWrapper>
  </MainAuth>
);

export default SignIn;
