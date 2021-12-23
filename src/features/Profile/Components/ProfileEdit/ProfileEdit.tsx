import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  AvatarWrapper, Buttons, EditFormStyled, ProfileEditStyled,
} from './ProfileEdit.styled';
import {
  Avatar, Button, Input, Paragraph, SpanError,
} from '../../../../components';
import { ProfileEditTypes } from './types';
import Camera from '../../../../assets/svg/camera.svg';
import InputWrapper from '../../../../layouts/InputWrapper';
import { DICTIONARY_PROFILE } from '../../DICTIONARY';
import { FIRSTLASTNAME } from '../../../../core/consts/validation';
import { SaveChangeProfileTypes } from '../../types';
import Multiply from '../../../../assets/svg/multiply-grey.svg';
import SaveIcon from '../../../../assets/svg/check-white.svg';
import { useAppSelector } from '../../../../store';

export const ProfileEdit: React.FC <ProfileEditTypes> = ({
  photo, editProfile, onSubmit, handleClick,
}) => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const userProfile = useAppSelector((state) => state.user.userProfile);
  return (
    <ProfileEditStyled onSubmit={handleSubmit(({
      firstName, lastName, occupation,
    }) => {
      const params: SaveChangeProfileTypes = {
        firstName,
        lastName,
        specializations: [
          occupation,
        ],
      };
      onSubmit(params);
    })}
    >
      <Avatar src={photo} variant="profile-avatar" edited="edited" alt="profile-avatar" />
      <AvatarWrapper>
        {editProfile && <img src={Camera} alt="camera" />}
      </AvatarWrapper>
      <EditFormStyled>
        <InputWrapper>
          <Paragraph variant="caption">{DICTIONARY_PROFILE.firstName}</Paragraph>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: true, minLength: 1, pattern: FIRSTLASTNAME }}
            render={({
              field: { ref, onChange },
            }) => (
              <Input
                onChange={onChange}
                inputRef={ref}
                placeholder={DICTIONARY_PROFILE.firstName}
              />
            )}
          />
          {errors.firstName
        && <SpanError variant="auth" role="alert">First Name contains unsupported characters</SpanError>}
        </InputWrapper>
        <InputWrapper>
          <Paragraph variant="caption">{DICTIONARY_PROFILE.lastName}</Paragraph>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: true, minLength: 1, pattern: FIRSTLASTNAME }}
            render={({
              field: { ref, onChange },
            }) => (
              <Input
                onChange={onChange}
                inputRef={ref}
                placeholder={DICTIONARY_PROFILE.lastName}
              />
            )}
          />
          {errors.lastName
          && <SpanError variant="auth" role="alert">Last Name contains unsupported characters</SpanError>}
        </InputWrapper>
        {userProfile.role_name === 'Patient'
        || (
        <InputWrapper>
          <Paragraph variant="caption">{DICTIONARY_PROFILE.occupation}</Paragraph>
          <Controller
            name="occupation"
            control={control}
            rules={{ required: true, minLength: 1, pattern: FIRSTLASTNAME }}
            render={({
              field: { ref, onChange },
            }) => (
              <Input
                onChange={onChange}
                inputRef={ref}
                placeholder={DICTIONARY_PROFILE.occupation}
              />
            )}
          />
          {errors.occupation
          && <SpanError variant="auth" role="alert">Occupation contains unsupported characters</SpanError>}
        </InputWrapper>
        )}
      </EditFormStyled>
      <Buttons>
        <Button color="light" group="main" size="small" startIcon={Multiply} onClick={handleClick}>{DICTIONARY_PROFILE.cancelButton}</Button>
        <Button color="primary" group="main" size="small" startIcon={SaveIcon} type="submit">{DICTIONARY_PROFILE.saveButton}</Button>
      </Buttons>
    </ProfileEditStyled>
  );
};
