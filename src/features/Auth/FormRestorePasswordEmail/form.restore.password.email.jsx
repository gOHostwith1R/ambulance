import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import emailIcon from '../../../assets/svg/mail-icon.svg';
import { EMAIL } from '../../../core/consts/validation';
import Arrow from '../../../assets/svg/arrow-icon.svg';
import SpanError from '../../../components/SpanError';
import { FormStyled } from '../../../components/Form/form.styled';
import InputWrapper from '../InputWrapper';
import arrowLeftIcon from '../../../assets/svg/arrow-left-gray.svg';
import Title from '../../../components/Title';
import FlexContainer from '../../../components/FlexContainer';
import Paragraph from '../../../components/Paragraph';
import { DICTIONARY } from '../../../core/consts/dictionary';

const FormRestorePasswordEmail = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <FlexContainer gap="16px" margin="0 0 32px 0">
        <Link to="sign-up">
          <img src={arrowLeftIcon} alt="arrow-left" />
        </Link>
        <Title variant="h1">
          {DICTIONARY.authForm.restorePassword}
        </Title>
      </FlexContainer>
      <Paragraph variant="plain-2" font="regular" margin="0 0 40px 0" color="#A1ABC9">
        {DICTIONARY.authForm.restorePasswordText}
      </Paragraph>
      <InputWrapper>
        <Input
          placeholder={DICTIONARY.authForm.email}
          type="email"
          icon={emailIcon}
          name="email"
          {...register('email', { required: true, minLength: 1, pattern: EMAIL })}
        />
        {errors.email && <SpanError variant="auth">Email contains unsupported characters</SpanError>}
      </InputWrapper>
      <Link to="/restore-message">
        <Button variant="contained" color="primary" group="auth" endIcon={Arrow} pos="80% 50%">{DICTIONARY.authForm.sentResetLink}</Button>
      </Link>
    </FormStyled>
  );
};

export default FormRestorePasswordEmail;
