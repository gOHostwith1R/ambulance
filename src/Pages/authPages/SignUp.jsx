import React from 'react';
import { Link } from 'react-router-dom';
import MainAuth from '../../features/Auth/MainAuth';
import MainWrapper from '../../features/Auth/MainWrapper';
import FormSignUp from '../../features/Auth/FormSignUp';
import Footer from '../../features/Auth/Footer';
import Paragraph from '../../components/Paragraph';
import LinkToPage from '../../components/LinkToPage';

const SignUp = () => (
  <MainAuth>
    <MainWrapper>
      <FormSignUp />
      <Footer>
        <Paragraph variant="plain-2" font="regular" color="#A1ABC9">Already have an account?</Paragraph>
        <Link to="/sign-in">
          <LinkToPage variant="auth">
            Sign in
          </LinkToPage>
        </Link>
      </Footer>
    </MainWrapper>
  </MainAuth>
);

export default SignUp;
