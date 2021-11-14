import React from 'react';
import MainAuth from '../../containers/Auth/MainAuth';
import MainWrapper from '../../containers/Auth/MainWrapper';
import FormSignUp from '../../containers/Auth/FormSignUp';
import Footer from '../../containers/Auth/Footer';
import AccountParagraph from '../../components/Auth/AccountParagraph/account.paragraph';
import LinkAuth from '../../components/Auth/LinkAuth';
import TitleH2 from '../../components/Auth/TitleH2';

const SignUp = () => (
  <MainAuth>
    <MainWrapper>
      <FormSignUp>
        <TitleH2>Sign up</TitleH2>
      </FormSignUp>
      <Footer>
        <AccountParagraph>Already have an account?</AccountParagraph>
        <LinkAuth link="true" to="/sign-in">
          Sign in
        </LinkAuth>
      </Footer>
    </MainWrapper>
  </MainAuth>
);

export default SignUp;
