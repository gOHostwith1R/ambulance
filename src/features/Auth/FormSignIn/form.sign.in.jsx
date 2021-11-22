import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FormStyled } from '../../../components/Form/form.styled';
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
import Arrow from '../../../assets/svg/arrow-icon.svg';
import Title from '../../../components/Title';
import LinkToPage from '../../../components/LinkToPage';

const FormSignIn = () => {
  const { type, setTypePassword } = useSetVisiblePassword();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <Title variant="h1" margin="0 0 40px 0">Sign in</Title>
      <InputWrapper>
        <Input
          placeholder="Email"
          type="email"
          icon={emailIcon}
          name="email"
          {...register('email', { required: true, minLength: 1, pattern: EMAIL })}
        />
        {errors.email && <SpanError variant="auth">Email contains unsupported characters</SpanError>}
      </InputWrapper>
      <InputWrapper>
        <Input
          placeholder="Password"
          type={type}
          icon={passwordIcon}
          name="password"
          {...register('password', { required: true, minLength: 1, pattern: PASSWORD })}
        />
        {errors.password && <SpanError variant="auth">Password contains unsupported characters</SpanError>}
        <SpanImageVisible
          visiblePassword={visiblePassword}
          setTypePassword={setTypePassword}
        />
      </InputWrapper>
      <Button variant="contained" color="primary" group="auth" endIcon={Arrow} pos="80% 50%">Sign In</Button>
      <Link to="/restore-password-email">
        <LinkToPage variant="auth" margin="32px 0 0 0" display="inline-block">
          Forgot Password?
        </LinkToPage>
      </Link>
    </FormStyled>
  );
};

export default FormSignIn;
