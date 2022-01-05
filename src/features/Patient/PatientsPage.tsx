import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from 'react-use';
import { useDispatch } from 'react-redux';
import {
  Button, ContentHeader,
  CustomLoader, Modal,
  Title,
} from '../../components';
import MainWrapper from '../../layouts/MainWrapper';
import ContentWrapper from '../../layouts/ContentWrapper';
import ButtonWrapper from '../../layouts/ButtonWrapper';
import CardWrapper from '../../layouts/CardWrapper';
import { DICTIONARY } from '../../core/consts/dictionary';
import { fetchListOfAppointmentsDoctor } from './redux/PatientSlice';
import { fetchRefreshToken } from '../Auth/redux/userSlice';
import PatientsList from './components/PatientsList';
import PatientDropdownSearch from './components/PatientDropdownSearch';
import { useAppSelector } from '../../store';

const PatientsPage = () => {
  useTitle(DICTIONARY.pageName.patients);
  const [open, setOpen] = useState(false);
  const [modalVariant, setModalVariant] = useState(' ');
  const dispatch = useDispatch();
  const error = useAppSelector((state) => state.user.error);
  useEffect(() => {
    dispatch(fetchListOfAppointmentsDoctor());
  }, [dispatch]);
  const listOfAppointments = useAppSelector((state) => state.patient.listOfAppointments);

  useEffect(() => {
    dispatch(fetchRefreshToken());
  }, [dispatch, error]);
  const userProfile = useAppSelector((state) => state.user.userProfile);
  const status = useAppSelector((state) => state.patient.status);
  const handleSetOpenModal = (e: string) => {
    setOpen(!open);
    setModalVariant(e);
  };
  return (
    <>
      {open && (
      <Modal
        variant={modalVariant}
        name={`${userProfile.first_name} ${userProfile.last_name}`}
        handleSetOpenModal={handleSetOpenModal}
      />
      )}
      <MainWrapper>
        <ContentWrapper>
          <ButtonWrapper>
            <Link to="/profile">
              <Button group="main" color="light">{DICTIONARY.pageName.profile}</Button>
            </Link>
            <Button group="main" color="primary">{DICTIONARY.pageName.patients}</Button>
            <Link to="/resolutions">
              <Button group="main" color="light">{DICTIONARY.pageName.resolutions}</Button>
            </Link>
          </ButtonWrapper>
          <ContentHeader>
            <Title variant="h2" level={2}>{DICTIONARY.pageName.myPatients}</Title>
            <PatientDropdownSearch />
          </ContentHeader>
          <CardWrapper>
            {status === 'Pending' ? <CustomLoader />
              : (
                <PatientsList
                  listOfAppointments={listOfAppointments}
                  handleSetOpenModal={handleSetOpenModal}
                />
              )}
          </CardWrapper>
        </ContentWrapper>
      </MainWrapper>
    </>
  );
};

export default PatientsPage;
