import React from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from 'react-use';
import { useDispatch } from 'react-redux';
import MainAuth from '../MainAuth';
import MainWrapper from '../MainWrapper';
import FormSignUp from '../FormSignUp';
import Footer from '../../../components/Footer';
import Paragraph from '../../../components/Paragraph';
import LinkToPage from '../../../components/LinkToPage';
import { DICTIONARY } from '../../../core/consts/dictionary';
import { getUserProfile, signUpUser } from '../../../store/slices/userSlice';
import { setStatus } from '../../../store/slices/appointmentSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  useTitle(DICTIONARY.authForm.signUp);
  const handleSubmit = async (data) => {
    dispatch(setStatus());
    await dispatch(signUpUser(data));
    await dispatch(getUserProfile());
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
