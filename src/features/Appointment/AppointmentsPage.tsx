import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from 'react-use';
import { useDispatch } from 'react-redux';
import {
  MainHeader,
  Button, Avatar, ContentHeader, Indicator,
  CustomLoader,
  Paragraph,
  Title,
  UserInfo,
} from '../../components';
import HeaderUser from '../../layouts/HeaderUser';
import MainWrapper from '../../layouts/MainWrapper';
import ContentWrapper from '../../layouts/ContentWrapper';
import ButtonWrapper from '../../layouts/ButtonWrapper';
import CardWrapper from '../../layouts/CardWrapper';
import PageWrapper from '../../layouts/PageWrapper/PageWrapper';
import { DICTIONARY } from '../../core/consts/dictionary';
import { fetchUserProfile } from '../Auth/redux/userSlice';
import { useAppSelector } from '../../store';
import { fetchListOfAppointmentsPatient } from './redux/appointmentSlice';
import AppointmentList from './components/AppointmentList';
import AppointmentDropdownButton from './components/AppointmentDropdownButton';

const AppointmentsPage = () => {
  const dispatch = useDispatch();
  useTitle(DICTIONARY.pageName.appointments);
  const status = useAppSelector((state) => state.user.status);
  const userProfile = useAppSelector((state) => state.user.userProfile);
  const listOfAppointments = useAppSelector((state) => state.appointment.listOfAppointments);
  useEffect(() => {
    dispatch(fetchUserProfile());
    dispatch(fetchListOfAppointmentsPatient());
  }, [dispatch]);

  return (
    <PageWrapper>
      {status === 'pending' ? <CustomLoader />
        : (
          <>
            <MainHeader>
              <HeaderUser>
                <UserInfo>
                  <Title variant="h3" level={3}>{`${userProfile.first_name} ${userProfile.last_name}`}</Title>
                  <Paragraph variant="caption" color="#A1ABC9">{`${userProfile.role_name}`}</Paragraph>
                </UserInfo>
                <Avatar variant="header-avatar" src={userProfile.photo} alt="avatar" />
                <Indicator variant="withBorder" status="confirmed" />
              </HeaderUser>
            </MainHeader>
            <MainWrapper>
              <ContentWrapper>
                <ButtonWrapper>
                  {userProfile.role_name === 'Patient' ? null
                    : (
                      <Link to="/patients">
                        <Button group="main" color="light">{DICTIONARY.pageName.profile}</Button>
                      </Link>
                    )}
                  <Button group="main" color="primary">{DICTIONARY.pageName.appointments}</Button>
                  <Button group="main" color="light">{DICTIONARY.pageName.resolutions}</Button>
                </ButtonWrapper>
                <ContentHeader>
                  <Title variant="h2" level={2}>My Appointments</Title>
                  <AppointmentDropdownButton />
                </ContentHeader>
                <CardWrapper>
                  <AppointmentList
                    listOfAppointments={listOfAppointments}
                    status={status}
                  />
                </CardWrapper>
              </ContentWrapper>
            </MainWrapper>
          </>
        )}
    </PageWrapper>
  );
};

export default AppointmentsPage;
