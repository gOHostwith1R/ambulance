import React from 'react';
import HeaderUser from '../../layouts/HeaderUser';
import { UserInfo } from '../UserInfo';
import { Title } from '../Title';
import { Paragraph } from '../Paragraph';
import { Avatar } from '../Avatar';
import { Indicator } from '../Indicator';
import { MainHeader } from '../MainHeader';
import { UserProfileTypes } from './types';

export const UserProfile = ({ userProfile }: UserProfileTypes) => (
  <MainHeader>
    <HeaderUser>
      <UserInfo>
        <Title variant="h3" level={3}>{`${userProfile.first_name} ${userProfile.last_name}`}</Title>
        <Paragraph variant="caption" color="#A1ABC9">{userProfile.role_name}</Paragraph>
      </UserInfo>
      <Avatar variant="header-avatar" src={userProfile.photo} alt="avatar" />
      <Indicator variant="withBorder" status="confirmed" />
    </HeaderUser>
  </MainHeader>
);
