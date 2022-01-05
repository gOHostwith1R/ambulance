import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from 'react-use';
import { useDispatch } from 'react-redux';
import {
  Button, ContentHeader, CustomLoader, Title,
} from '../../components';
import MainWrapper from '../../layouts/MainWrapper';
import ContentWrapper from '../../layouts/ContentWrapper';
import ButtonWrapper from '../../layouts/ButtonWrapper';
import { DICTIONARY } from '../../core/consts/dictionary';
import PatientDropdownSearch from '../Patient/components/PatientDropdownSearch';
import { useAppSelector } from '../../store';
import { DICTIONARY_RESOLUTIONS } from './DICTIONARY_RESOLUTIONS';
import { fetchListOfResolutions } from './redux/resolutionsSlice';
import { EmptyResolutions } from './Components/EmptyResolutions';

export const Resolutions = () => {
  useTitle(DICTIONARY_RESOLUTIONS.pageName);
  const dispatch = useDispatch();
  const userProfile = useAppSelector((state) => state.user.userProfile);
  const status = useAppSelector((state) => state.resolutions.status);
  useEffect(() => {
    dispatch(fetchListOfResolutions());
  }, [dispatch]);
  return (
    <MainWrapper>
      <ContentWrapper>
        <ButtonWrapper>
          <Link to="/profile">
            <Button group="main" color="light">{DICTIONARY.pageName.profile}</Button>
          </Link>
          {userProfile.role_name === 'Doctor' ? (
            <Link to="/patients">
              <Button group="main" color="light">{DICTIONARY.pageName.patients}</Button>
            </Link>
          ) : (
            <Link to="/appointments">
              <Button group="main" color="light">{DICTIONARY.pageName.patients}</Button>
            </Link>
          )}
          <Link to="/resolutions">
            <Button group="main" color="primary">{DICTIONARY.pageName.resolutions}</Button>
          </Link>
        </ButtonWrapper>
        <ContentHeader>
          <Title variant="h2" level={2}>{DICTIONARY_RESOLUTIONS.title}</Title>
          <PatientDropdownSearch />
        </ContentHeader>
        {status === 'pending' ? <CustomLoader /> : <EmptyResolutions />}
      </ContentWrapper>
    </MainWrapper>
  );
};
