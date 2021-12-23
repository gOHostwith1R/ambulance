import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTitle } from 'react-use';
import { fetchUserProfile } from '../Auth/redux/userSlice';
import {
  Button, ContentHeader, CustomLoader, Title, UserProfile,
} from '../../components';
import { useAppSelector } from '../../store';
import PageWrapper from '../../layouts/PageWrapper';
import MainWrapper from '../../layouts/MainWrapper';
import ContentWrapper from '../../layouts/ContentWrapper';
import { DICTIONARY_PROFILE } from './DICTIONARY';
import { ProfileWrapper } from './Components/ProfileWrapper';
import { DICTIONARY } from '../../core/consts/dictionary';
import ButtonWrapper from '../../layouts/ButtonWrapper';
import { ProfileData } from './Components/ProfileData';
import Pen from '../../assets/svg/pen.svg';
import { ProfileEdit } from './Components/ProfileEdit';
import { SaveChangeProfileTypes } from './types';

export const Profile: React.FC = () => {
  useTitle(DICTIONARY_PROFILE.titlePage);
  const dispatch = useDispatch();
  const [editProfile, setEditProfile] = useState(false);
  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);
  const userProfile = useAppSelector((state) => state.user.userProfile);
  const status = useAppSelector((state) => state.user.status);
  const handleSubmit = (params: SaveChangeProfileTypes) => {
    console.log(params);
  };
  const handleClick = () => {
    setEditProfile(!editProfile);
  };
  const EditOrProfile = editProfile ? (
    <ProfileEdit
      photo={userProfile.photo}
      editProfile={editProfile}
      onSubmit={handleSubmit}
      handleClick={handleClick}
    />
  )
    : <ProfileData userProfile={userProfile} />;

  return (
    <PageWrapper>
      <UserProfile userProfile={userProfile} />
      <MainWrapper>
        <ContentWrapper>
          <ButtonWrapper>
            <Button group="main" color="primary">{DICTIONARY.pageName.profile}</Button>
            <Link to="/appointments">
              <Button group="main" color="light">{DICTIONARY.pageName.appointments}</Button>
            </Link>
            <Link to="/resolutions">
              <Button group="main" color="light">{DICTIONARY.pageName.resolutions}</Button>
            </Link>
          </ButtonWrapper>
          <ContentHeader>
            <Title variant="h2" level={2}>{DICTIONARY_PROFILE.title}</Title>
            {editProfile
            || <Button color="primary" group="main" startIcon={Pen} size="small" onClick={handleClick}>{DICTIONARY_PROFILE.editButton}</Button>}
          </ContentHeader>
          <ProfileWrapper>
            {status === 'pending' ? <CustomLoader /> : EditOrProfile }
          </ProfileWrapper>
        </ContentWrapper>
      </MainWrapper>
    </PageWrapper>
  );
};
