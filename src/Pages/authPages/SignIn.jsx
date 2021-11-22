import React from 'react';
import { Link } from 'react-router-dom';
import MainAuth from '../../features/Auth/MainAuth';
import MainWrapper from '../../features/Auth/MainWrapper';
import Footer from '../../features/Auth/Footer';
import FormSignIn from '../../features/Auth/FormSignIn/form.sign.in';
import Paragraph from '../../components/Paragraph';
import LinkToPage from '../../components/LinkToPage';

const SignIn = () => (
  <MainAuth>
    <MainWrapper>
      <FormSignIn />
      <Footer>
        <Paragraph variant="plain-2" font="regular" color="#A1ABC9">Don’t have an account?</Paragraph>
        <Link to="/sign-up">
          <LinkToPage variant="auth">
            Sign up
          </LinkToPage>
        </Link>
      </Footer>
    </MainWrapper>
  </MainAuth>
);

export default SignIn;
