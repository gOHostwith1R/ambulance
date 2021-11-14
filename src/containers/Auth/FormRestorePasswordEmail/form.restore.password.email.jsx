import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '../../../components/Auth/Button';
import Input from '../../../components/Auth/Input';
import emailIcon from '../../../assets/svg/mail-icon.svg';
import { EMAIL } from '../../../core/consts/validation';
import SpanError from '../../../components/Auth/SpanError';
import { FormStyled } from '../Form/form.styled';
import InputWrapper from '../InputWrapper';

const FormRestorePasswordEmail = ({ children }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      { children }
      <InputWrapper>
        <Input
          placeholder="Email"
          type="email"
          icon={emailIcon}
          name="email"
          {...register('email', { required: true, minLength: 1, pattern: EMAIL })}
        />
        {errors.email ? <SpanError>Email contains unsupported characters</SpanError> : ''}
      </InputWrapper>
      <Link to="/restore-message">
        <Button type="submit">Send Reset Link</Button>
      </Link>
    </FormStyled>
  );
};

export default FormRestorePasswordEmail;
