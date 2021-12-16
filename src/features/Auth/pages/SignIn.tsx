import React from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from 'react-use';
import { useDispatch } from 'react-redux';
import MainAuth from '../MainAuth';
import MainWrapper from '../MainWrapper';
import Footer from '../../../components/Footer';
import FormSignIn from '../FormSignIn/FormSignIn';
import Paragraph from '../../../components/Paragraph';
import LinkToPage from '../../../components/LinkToPage';
import { DICTIONARY } from '../../../core/consts/dictionary';
import { signInUser } from '../redux/userSlice';

export interface HandleSubmitProps {
  [key: string]: string
}

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  useTitle(DICTIONARY.authForm.signIn);
  const handleSubmit = (data: HandleSubmitProps) => {
    dispatch(signInUser(data));
  };
  return (
    <MainAuth>
      <MainWrapper>
        <FormSignIn onSubmit={handleSubmit} />
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
