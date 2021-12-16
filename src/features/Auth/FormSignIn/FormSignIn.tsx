import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FormStyled } from '../../../components/Form/Form.styled';
import useSetVisiblePassword from '../../../core/hooks/useSetVisiblePassword';
import Input from '../../../components/Input';
import emailIcon from '../../../assets/svg/mail-icon.svg';
import passwordIcon from '../../../assets/svg/password-icon.svg';
import SpanImageVisible from '../SpanImageVisible';
import visiblePassword from '../../../assets/svg/visible-password-icon.svg';
import Button from '../../../components/Button';
import InputWrapper from '../InputWrapper';
import SpanError from '../../../components/SpanError';
import { EMAIL, PASSWORD } from '../../../core/consts/validation';
import Title from '../../../components/Title';
import { DICTIONARY } from '../../../core/consts/dictionary';
import TitleWrapper from '../TitleWrapper';
import ForgotPassword from '../ForgotPassword';
import { FormSignInProps } from './types';

const FormSignIn: React.FC <FormSignInProps> = ({ onSubmit }) => {
  const { type, setTypePassword } = useSetVisiblePassword();
  const { control, handleSubmit, formState: { errors } } = useForm();

  return (
    <FormStyled onSubmit={handleSubmit((values) => onSubmit(values))}>
      <TitleWrapper>
        <Title variant="h1">Sign In</Title>
      </TitleWrapper>
      <InputWrapper>
        <Controller
          name="userName"
          control={control}
          rules={{ required: true, minLength: 3, pattern: EMAIL }}
          render={({
            field: { ref, onChange },
          }) => (
            <Input
              onChange={onChange}
              inputRef={ref}
              icon={emailIcon}
              placeholder={DICTIONARY.authForm.email}
            />
          )}
        />
        {errors.userName && <SpanError variant="auth" role="alert">Email contains unsupported characters</SpanError>}
      </InputWrapper>
      <InputWrapper>
        <Controller
          name="password"
          control={control}
          rules={{ required: true, minLength: 5, pattern: PASSWORD }}
          render={({
            field: { ref, onChange },
          }) => (
            <Input
              onChange={onChange}
              type={type}
              inputRef={ref}
              icon={passwordIcon}
              placeholder={DICTIONARY.authForm.password}
            />
          )}
        />
        {errors.password && <SpanError variant="auth" role="alert">Password contains unsupported characters</SpanError>}
        <SpanImageVisible
          visiblePassword={visiblePassword}
          setTypePassword={setTypePassword}
        />
      </InputWrapper>
      <Button color="primary" group="auth">{DICTIONARY.authForm.signIn}</Button>
      <ForgotPassword />
    </FormStyled>
  );
};

export default FormSignIn;
