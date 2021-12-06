import React from 'react';
import { useForm } from 'react-hook-form';
import { FormStyled } from '../../../components/Form/form.styled';
import useSetVisiblePassword from '../../../core/hooks/useSetVisiblePassword';
import Input from '../../../components/Input';
import userIcon from '../../../assets/svg/user-icon.svg';
import emailIcon from '../../../assets/svg/mail-icon.svg';
import passwordIcon from '../../../assets/svg/password-icon.svg';
import SpanImageVisible from '../SpanImageVisible';
import visiblePassword from '../../../assets/svg/visible-password-icon.svg';
import checkIcon from '../../../assets/svg/check-icon.svg';
import Button from '../../../components/Button';
import InputWrapper from '../InputWrapper';
import SpanError from '../../../components/SpanError';
import Arrow from '../../../assets/svg/arrow-icon.svg';
import { FIRSTLASTNAME, EMAIL, PASSWORD } from '../../../core/consts/validation';
import Title from '../../../components/Title';
import { DICTIONARY } from '../../../core/consts/dictionary';

const FormSignUp = ({ onSubmit }) => {
  const { type, setTypePassword } = useSetVisiblePassword();
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <FormStyled onSubmit={handleSubmit((values) => onSubmit(values))}>
      <Title variant="h1" margin="0 0 40px">Sign Up</Title>
      <InputWrapper>
        <Input
          placeholder={DICTIONARY.authForm.firstName}
          type="text"
          icon={userIcon}
          name="firstName"
          {...register('firstName', { required: true, minLength: 1, pattern: FIRSTLASTNAME })}
        />
        {errors.firstName && <SpanError variant="auth" role="alert">First Name contains unsupported characters</SpanError>}
      </InputWrapper>
      <InputWrapper>
        <Input
          placeholder={DICTIONARY.authForm.lastName}
          type="text"
          icon={userIcon}
          name="lastName"
          {...register('lastName', { required: true, minLength: 1, pattern: FIRSTLASTNAME })}
        />
        {errors.lastName && <SpanError variant="auth" role="alert">Last Name contains unsupported characters</SpanError>}
      </InputWrapper>
      <InputWrapper>
        <Input
          placeholder={DICTIONARY.authForm.email}
          type="email"
          icon={emailIcon}
          name="userName"
          {...register('userName', { required: true, minLength: 1, pattern: EMAIL })}
        />
        {errors.userName && <SpanError variant="auth" role="alert">Email contains unsupported characters</SpanError>}
      </InputWrapper>
      <InputWrapper>
        <Input
          placeholder={DICTIONARY.authForm.password}
          type={type}
          icon={passwordIcon}
          name="password"
          {...register('password', { required: true, minLength: 6, pattern: PASSWORD })}
        />
        {errors.password && <SpanError variant="auth" role="alert">Password contains unsupported characters</SpanError> }
        <SpanImageVisible
          visiblePassword={visiblePassword}
          setTypePassword={setTypePassword}
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          placeholder={DICTIONARY.authForm.confirmPassword}
          type={type}
          icon={checkIcon}
          name="confirmPassword"
          {...register('confirmPassword')}
        />
        <SpanImageVisible
          visiblePassword={visiblePassword}
          setTypePassword={setTypePassword}
        />
      </InputWrapper>
      <Button variant="contained" color="primary" group="auth" endIcon={Arrow} pos="80% 50%" type="submit">
        {DICTIONARY.authForm.signUp}
      </Button>
    </FormStyled>
  );
};

export default FormSignUp;
