import React, { useEffect } from 'react';
import { useTitle } from 'react-use';
import { useDispatch } from 'react-redux';
import {
  ContentHeader,
  Title,
} from '../../components';
import MainWrapper from '../../layouts/MainWrapper';
import ContentWrapper from '../../layouts/ContentWrapper';
import FormMakeAnAppointment from './components/FormMakeAnAppointments';
import { DICTIONARY } from '../../core/consts/dictionary';
import LinksWrapper from './components/LinksWrapper';
import { makeAppointment, setMakeAppointmentStatus } from './redux/appointmentSlice';
import { MakeAppointmentProps } from './redux/types';

const MakeAppointmentsPage: React.FC = () => {
  const dispatch = useDispatch();
  useTitle(DICTIONARY.pageName.makeAppointment);
  useEffect(() => {
    dispatch(setMakeAppointmentStatus());
  }, [dispatch]);

  const handleSubmit = (values: MakeAppointmentProps) => {
    dispatch(makeAppointment(values));
  };

  return (
    <MainWrapper>
      <ContentWrapper>
        <LinksWrapper />
        <ContentHeader variant="makeAppointment">
          <Title variant="h2" level={2}>{DICTIONARY.pageName.makeAppointment}</Title>
        </ContentHeader>
        <FormMakeAnAppointment onSubmit={handleSubmit} />
      </ContentWrapper>
    </MainWrapper>
  );
};

export default MakeAppointmentsPage;
