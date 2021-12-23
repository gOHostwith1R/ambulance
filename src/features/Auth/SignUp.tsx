import React from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from 'react-use';
import { useDispatch } from 'react-redux';
import MainAuth from './components/MainAuth';
import MainWrapper from './components/MainWrapper';
import FormSignUp from './components/FormSignUp';
import { Footer, LinkToPage, Paragraph } from '../../components';
import { DICTIONARY } from '../../core/consts/dictionary';
import { signUpUser } from './redux/userSlice';

export interface HandleSubmitProps {
  [key: string]: string
}

const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  useTitle(DICTIONARY.authForm.signUp);
  const handleSubmit = async (data: HandleSubmitProps) => {
    await dispatch(signUpUser(data));
  };
  return (
    <MainAuth>
      <MainWrapper>
        <FormSignUp onSubmit={handleSubmit} />
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
