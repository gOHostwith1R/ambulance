import React, { useEffect } from 'react';
import { useTitle } from 'react-use';
import { useDispatch } from 'react-redux';
import PageWrapper from '../../layouts/PageWrapper/PageWrapper';
import MainHeader from '../../components/MainHeader';
import HeaderUser from '../../layouts/HeaderUser';
import UserInfo from '../../components/UserInfo';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import Avatar from '../../components/Avatar';
import Indicator from '../../components/Indicator';
import MainWrapper from '../../layouts/MainWrapper';
import ContentWrapper from '../../layouts/ContentWrapper';
import ContentHeader from '../../components/ContentHeader';
import FormCreateAppointments from './components/FormCreateAppointments';
import { DICTIONARY } from '../../core/consts/dictionary';
import { makeAppointment } from '../../store/slices/appointmentSlice';
import LinksWrapper from './components/LinksWrapper';
import { useAppSelector } from '../../store';
import { fetchUserProfile } from '../Auth/redux/userSlice';

const MakeAppointmentsPage = () => {
  const dispatch = useDispatch();
  useTitle(DICTIONARY.pageName.makeAppointment);
  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  const userProfile = useAppSelector((state) => state.user.userProfile);

  const handleSubmit = () => {
    dispatch(makeAppointment());
  };
  return (
    <PageWrapper>
      <MainHeader>
        <HeaderUser>
          <UserInfo>
            <Title variant="h3" level={3}>{`${userProfile.first_name} ${userProfile.last_name}`}</Title>
            <Paragraph variant="caption" color="#A1ABC9">{userProfile.role_name}</Paragraph>
          </UserInfo>
          <Avatar src={userProfile.photo} variant="header-avatar" alt="avatar" />
          <Indicator variant="withBorder" status="confirmed" />
        </HeaderUser>
      </MainHeader>
      <MainWrapper>
        <ContentWrapper>
          <LinksWrapper />
          <ContentHeader variant="makeAppointment">
            <Title variant="h2" level={2}>{DICTIONARY.pageName.makeAppointment}</Title>
          </ContentHeader>
          <FormCreateAppointments onSubmit={handleSubmit} />
        </ContentWrapper>
      </MainWrapper>
    </PageWrapper>
  );
};

export default MakeAppointmentsPage;
