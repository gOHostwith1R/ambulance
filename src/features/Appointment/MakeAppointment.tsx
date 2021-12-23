import React, { useEffect } from 'react';
import { useTitle } from 'react-use';
import { useDispatch } from 'react-redux';
import PageWrapper from '../../layouts/PageWrapper/PageWrapper';
import {
  ContentHeader,
  Title,
  UserProfile,
} from '../../components';
import MainWrapper from '../../layouts/MainWrapper';
import ContentWrapper from '../../layouts/ContentWrapper';
import FormMakeAnAppointment from './components/FormMakeAnAppointments';
import { DICTIONARY } from '../../core/consts/dictionary';
import LinksWrapper from './components/LinksWrapper';
import { makeAppointment, setMakeAppointmentStatus } from './redux/appointmentSlice';
import { MakeAppointmentProps } from './redux/types';
import { fetchUserProfile } from '../Auth/redux/userSlice';
import { useAppSelector } from '../../store';

const MakeAppointmentsPage: React.FC = () => {
  const dispatch = useDispatch();
  useTitle(DICTIONARY.pageName.makeAppointment);
  useEffect(() => {
    dispatch(fetchUserProfile());
    dispatch(setMakeAppointmentStatus());
  }, [dispatch]);

  const handleSubmit = (values: MakeAppointmentProps) => {
    dispatch(makeAppointment(values));
  };

  const userProfile = useAppSelector((state) => state.user.userProfile);
  return (
    <PageWrapper>
      <UserProfile userProfile={userProfile} />
      <MainWrapper>
        <ContentWrapper>
          <LinksWrapper />
          <ContentHeader variant="makeAppointment">
            <Title variant="h2" level={2}>{DICTIONARY.pageName.makeAppointment}</Title>
          </ContentHeader>
          <FormMakeAnAppointment onSubmit={handleSubmit} />
        </ContentWrapper>
      </MainWrapper>
    </PageWrapper>
  );
};

export default MakeAppointmentsPage;
