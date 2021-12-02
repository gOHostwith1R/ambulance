import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { getUserProfile, signUpUser } from '../../../store/slices/userSlice';
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

const FormSignUp = () => {
  const dispatch = useDispatch();
  const { type, setTypePassword } = useSetVisiblePassword();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    await dispatch(signUpUser(data));
    await dispatch(getUserProfile());
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <Title variant="h1" margin="0 0 40px">Sign up</Title>
      <InputWrapper>
        <Input
          placeholder={DICTIONARY.authForm.firstName}
          type="text"
          icon={userIcon}
          name="firstName"
          {...register('firstName', { required: true, minLength: 1, pattern: FIRSTLASTNAME })}
        />
        {errors.firstName && <SpanError variant="auth">First Name contains unsupported characters</SpanError>}
      </InputWrapper>
      <InputWrapper>
        <Input
          placeholder={DICTIONARY.authForm.lastName}
          type="text"
          icon={userIcon}
          name="lastName"
          {...register('lastName', { required: true, minLength: 1, pattern: FIRSTLASTNAME })}
        />
        {errors.lastName && <SpanError variant="auth">Last Name contains unsupported characters</SpanError>}
      </InputWrapper>
      <InputWrapper>
        <Input
          placeholder={DICTIONARY.authForm.email}
          type="email"
          icon={emailIcon}
          name="userName"
          {...register('userName', { required: true, minLength: 1, pattern: EMAIL })}
        />
        {errors.email && <SpanError variant="auth">Email contains unsupported characters</SpanError>}
      </InputWrapper>
      <InputWrapper>
        <Input
          placeholder={DICTIONARY.authForm.restorePassword}
          type={type}
          icon={passwordIcon}
          name="password"
          {...register('password', { required: true, minLength: 1, pattern: PASSWORD })}
        />
        {errors.password && <SpanError variant="auth">Password contains unsupported characters</SpanError> }
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
      <Button variant="contained" color="primary" group="auth" endIcon={Arrow} pos="80% 50%">
        {DICTIONARY.authForm.signUp}
      </Button>
    </FormStyled>
  );
};

export default FormSignUp;
