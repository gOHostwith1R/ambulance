import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from 'react-use';
import { useDispatch } from 'react-redux';
import {
  Button, ContentHeader,
  CustomLoader,
  UserProfile,
  Title,
  SubmitMessage,
} from '../../components';
import MainWrapper from '../../layouts/MainWrapper';
import ContentWrapper from '../../layouts/ContentWrapper';
import ButtonWrapper from '../../layouts/ButtonWrapper';
import CardWrapper from '../../layouts/CardWrapper';
import PageWrapper from '../../layouts/PageWrapper/PageWrapper';
import { DICTIONARY } from '../../core/consts/dictionary';
import { useAppSelector } from '../../store';
import { fetchListOfAppointmentsPatient } from './redux/appointmentSlice';
import AppointmentList from './components/AppointmentList';
import AppointmentDropdownButton from './components/AppointmentDropdownButton';
import { fetchRefreshToken, fetchUserProfile } from '../Auth/redux/userSlice';

const AppointmentsPage = () => {
  const dispatch = useDispatch();
  useTitle(DICTIONARY.pageName.appointments);
  const error = useAppSelector((state) => state.user.error);
  useEffect(() => {
    dispatch(fetchUserProfile());
    dispatch(fetchListOfAppointmentsPatient());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchRefreshToken());
  }, [dispatch, error]);
  const userProfile = useAppSelector((state) => state.user.userProfile);
  const makeAppointmentStatus = useAppSelector((state) => state.appointment.makeAppointmentStatus);
  const status = useAppSelector((state) => state.user.status);
  const listOfAppointments = useAppSelector((state) => state.appointment.listOfAppointments);

  return (
    <PageWrapper>
      <UserProfile userProfile={userProfile} />
      <MainWrapper>
        <ContentWrapper>
          <ButtonWrapper>
            <Link to="/profile">
              <Button group="main" color="light">{DICTIONARY.pageName.profile}</Button>
            </Link>
            <Button group="main" color="primary">{DICTIONARY.pageName.appointments}</Button>
            <Link to="/resolutions">
              <Button group="main" color="light">{DICTIONARY.pageName.resolutions}</Button>
            </Link>
          </ButtonWrapper>
          <ContentHeader>
            <Title variant="h2" level={2}>My Appointments</Title>
            <AppointmentDropdownButton />
          </ContentHeader>
          <CardWrapper>
            {status === 'pending' ? <CustomLoader />
              : (
                <AppointmentList
                  listOfAppointments={listOfAppointments}
                  status={status}
                />
              )}
          </CardWrapper>
        </ContentWrapper>
        {makeAppointmentStatus === 'fulfilled' && <SubmitMessage variant="success" /> }
      </MainWrapper>
    </PageWrapper>
  );
};

export default AppointmentsPage;
