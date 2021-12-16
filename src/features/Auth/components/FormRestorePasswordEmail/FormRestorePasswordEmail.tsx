import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {
  Button, Input, Paragraph, SpanError,
  Title,
} from '../../../../components';
import emailIcon from '../../../../assets/svg/mail-icon.svg';
import { EMAIL } from '../../../../core/consts/validation';
import { FormStyled } from '../../../../components/Form/Form.styled';
import InputWrapper from '../InputWrapper';
import arrowLeftIcon from '../../../../assets/svg/arrow-left-gray.svg';
import { DICTIONARY } from '../../../../core/consts/dictionary';
import TitleWrapper from '../TitleWrapper';
import { OnSubmitProps } from './types';

const FormRestorePasswordEmail: React.FC = () => {
  const {
    control, handleSubmit, formState: { errors },
  } = useForm<OnSubmitProps>();
  const onSubmit: SubmitHandler<OnSubmitProps> = (data) => data;
  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <TitleWrapper withIcon="true">
        <Link to="sign-up">
          <img src={arrowLeftIcon} alt="arrow-left" />
        </Link>
        <Title variant="h1">
          {DICTIONARY.authForm.restorePassword}
        </Title>
      </TitleWrapper>
      <Paragraph variant="plain-2" font="regular" color="#A1ABC9" group="restorePassword">
        {DICTIONARY.authForm.restorePasswordText}
      </Paragraph>
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
        {errors.userName && <SpanError variant="auth">Email contains unsupported characters</SpanError>}
      </InputWrapper>
      <Link to="/restore-message">
        <Button color="primary" group="auth">{DICTIONARY.authForm.sentResetLink}</Button>
      </Link>
    </FormStyled>
  );
};

export default FormRestorePasswordEmail;
