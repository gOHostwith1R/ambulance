import React from 'react';
import {
  Avatar, Button, Paragraph, Title, UserProfileTypes,
} from '../../../../components';
import { ProfileDataInfoStyled, ProfileDataStyled, TitleSubtitleStyled } from './ProfileData.styled';
import { DICTIONARY_PROFILE } from '../../DICTIONARY';
import Password from '../../../../assets/svg/password-icon.svg';

export const ProfileData = ({ userProfile }:UserProfileTypes) => (
  <ProfileDataStyled>
    <Avatar src={userProfile.photo} variant="profile-avatar" alt="profile-avatar" />
    <ProfileDataInfoStyled>
      <TitleSubtitleStyled>
        <Title variant="h2" level={2}>{`${userProfile.first_name} ${userProfile.last_name}`}</Title>
        <Paragraph variant="plain-2" font="regular" color="#A1ABC9">{userProfile.role_name}</Paragraph>
      </TitleSubtitleStyled>
      <Button color="light" group="main" filling="outlined" startIcon={Password}>{DICTIONARY_PROFILE.changePasswordButton}</Button>
    </ProfileDataInfoStyled>
  </ProfileDataStyled>
);
