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
import { fetchListOfAppointmentsDoctor } from './redux/PatientSlice';
import { fetchUserProfile, fetchRefreshToken } from '../Auth/redux/userSlice';
import PatientsList from './components/PatientsList';
import PatientDropdownSearch from './components/PatientDropdownSearch';
import { useAppSelector } from '../../store';

const PatientsPage = () => {
  useTitle(DICTIONARY.pageName.patients);
  const dispatch = useDispatch();
  const listOfAppointments = useAppSelector((state) => state.patient.listOfAppointments);
  const status = useAppSelector((state) => state.patient.status);
  const userProfile = useAppSelector((state) => state.user.userProfile);
  const error = useAppSelector((state) => state.user.error);
  useEffect(() => {
    dispatch(fetchUserProfile());
    dispatch(fetchListOfAppointmentsDoctor());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchRefreshToken());
  }, [dispatch, error]);

  return (
    <PageWrapper>
      {status === 'Pending' ? <CustomLoader />
        : (
          <>
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
            <MainWrapper>
              <ContentWrapper>
                <ButtonWrapper>
                  <Link to="/appointments">
                    <Button group="main" color="primary">{DICTIONARY.pageName.patients}</Button>
                  </Link>
                  <Button group="main" color="light">{DICTIONARY.pageName.resolutions}</Button>
                </ButtonWrapper>
                <ContentHeader>
                  <Title variant="h2" level={2}>{DICTIONARY.pageName.myPatients}</Title>
                  <PatientDropdownSearch />
                </ContentHeader>
                <CardWrapper>
                  <PatientsList
                    listOfAppointments={listOfAppointments}
                  />
                </CardWrapper>
              </ContentWrapper>
            </MainWrapper>
          </>
        )}
    </PageWrapper>
  );
};

export default PatientsPage;
