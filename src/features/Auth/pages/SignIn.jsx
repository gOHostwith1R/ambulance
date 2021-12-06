import React from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from 'react-use';
import { useDispatch } from 'react-redux';
import MainAuth from '../MainAuth';
import MainWrapper from '../MainWrapper';
import Footer from '../../../components/Footer';
import FormSignIn from '../FormSignIn/form.sign.in';
import Paragraph from '../../../components/Paragraph';
import LinkToPage from '../../../components/LinkToPage';
import { DICTIONARY } from '../../../core/consts/dictionary';
import { setStatus } from '../../../store/slices/appointmentSlice';
import { getUserProfile, signInUser } from '../../../store/slices/userSlice';

const SignIn = () => {
  const dispatch = useDispatch();
  useTitle(DICTIONARY.authForm.signIn);
  const handleSubmit = async (data) => {
    dispatch(setStatus());
    await dispatch(signInUser(data));
    await dispatch(getUserProfile());
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
