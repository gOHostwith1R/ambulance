import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HeaderUser from '../../layouts/HeaderUser';
import { UserInfo } from '../UserInfo';
import { Title } from '../Title';
import { Paragraph } from '../Paragraph';
import { Avatar } from '../Avatar';
import { Indicator } from '../Indicator';
import { MainHeader } from '../MainHeader';
import { fetchUserProfile } from '../../features/Auth/redux/userSlice';
import { useAppSelector } from '../../store';

export const UserProfile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);
  const userProfile = useAppSelector((state) => state.user.userProfile);
  return (
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
};
