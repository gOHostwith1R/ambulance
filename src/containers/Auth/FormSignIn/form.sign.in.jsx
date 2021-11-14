import React from 'react';
import { useForm } from 'react-hook-form';
import { FormStyled } from '../Form/form.styled';
import useSetVisiblePassword from '../../../core/hooks/useSetVisiblePassword';
import Input from '../../../components/Auth/Input';
import emailIcon from '../../../assets/svg/mail-icon.svg';
import passwordIcon from '../../../assets/svg/password-icon.svg';
import SpanImageVisible from '../../../components/Auth/SpanImageVisible';
import visiblePassword from '../../../assets/svg/visible-password-icon.svg';
import Button from '../../../components/Auth/Button';
import InputWrapper from '../InputWrapper';
import SpanError from '../../../components/Auth/SpanError';
import { EMAIL, PASSWORD } from '../../../core/consts/validation';

const FormSignIn = ({ children }) => {
  const { type, setTypePassword } = useSetVisiblePassword();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      { children[0] }
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
      <InputWrapper>
        <Input
          placeholder="Password"
          type={type}
          icon={passwordIcon}
          name="password"
          {...register('password', { required: true, minLength: 1, pattern: PASSWORD })}
        />
        {errors.password ? <SpanError>Password contains unsupported characters</SpanError> : ''}
        <SpanImageVisible
          visiblePassword={visiblePassword}
          setTypePassword={setTypePassword}
        />
      </InputWrapper>
      { children[1] }
      <Button type="submit">Sign In</Button>
    </FormStyled>
  );
};

export default FormSignIn;
