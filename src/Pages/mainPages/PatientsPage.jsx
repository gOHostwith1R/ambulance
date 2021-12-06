import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';
import MainHeader from '../../features/Main/MainHeader';
import HeaderUser from '../../features/Main/HeaderUser';
import MainWrapper from '../../features/Main/MainWrapper';
import ContentWrapper from '../../features/Main/ContentWrapper';
import ButtonWrapper from '../../features/Main/ButtonWrapper';
import Button from '../../components/Button';
import ContentHeader from '../../features/Main/ContentHeader';
import Title from '../../components/Title';
import FlexContainer from '../../components/FlexContainer';
import Search from '../../components/Search';
import { Dropdown } from '../../components/Dropdown';
import { DropdownItemStyled } from '../../components/Dropdown/dropdown.styled';
import CardWrapper from '../../features/Main/CardWrapper';
import PageWrapper from '../../features/Main/PageWrapper/page.wrapper';
import UserInfo from '../../features/Main/UserInfo';
import Paragraph from '../../components/Paragraph';
import Avatar from '../../components/Avatar';
import Indicator from '../../components/Indicator';
import { DICTIONARY } from '../../core/consts/dictionary';
import { appointmentSelector, getListOfAppointmentsDoctor, setStatus } from '../../store/slices/appointmentSlice';
import CustomLoader from '../../components/Loader';
import { getRefreshToken, getUserProfile, userSelector } from '../../store/slices/userSlice';
import PatientsList from '../../features/Main/PatientsList';

const PatientsPage = () => {
  useTitle(DICTIONARY.pageName.patients);
  const dispatch = useDispatch();
  const { listOfAppointments, statusForDoctor } = useSelector(appointmentSelector);
  const { userProfile, error } = useSelector(userSelector);
  useEffect(() => {
    dispatch(setStatus());
    dispatch(getUserProfile());
    dispatch(getListOfAppointmentsDoctor());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRefreshToken());
  }, [dispatch, error]);

  return (
    <PageWrapper>
      <MainHeader>
        <HeaderUser>
          <UserInfo>
            <Title variant="h3" level={3}>{`${userProfile.first_name} ${userProfile.last_name}`}</Title>
            <Paragraph variant="caption" textAlign="end" color="#A1ABC9">{userProfile.role_name}</Paragraph>
          </UserInfo>
          <Avatar variant="header-avatar" src={userProfile.photo} />
          <Indicator variant="withBorder" status="confirmed" />
        </HeaderUser>
      </MainHeader>
      <MainWrapper>
        <ContentWrapper>
          <ButtonWrapper>
            <Link to="/appointments">
              <Button variant="contained" color="primary" group="main">{DICTIONARY.pageName.patients}</Button>
            </Link>
            <Button variant="contained" color="light" group="main">{DICTIONARY.pageName.resolutions}</Button>
          </ButtonWrapper>
          <ContentHeader>
            <Title variant="h2" level={2}>{DICTIONARY.pageName.myPatients}</Title>
            <FlexContainer gap="48px" margin="0 4vh 0 0">
              <Search />
              <Dropdown name="Sort by:" mainItem="Date">
                {DICTIONARY.dropdownSortPatients.map((item) => (
                  <DropdownItemStyled key={item}>{item}</DropdownItemStyled>
                ))}
              </Dropdown>
            </FlexContainer>
          </ContentHeader>
          <CardWrapper>
            {statusForDoctor === '' || statusForDoctor === 'loading' ? <CustomLoader />
              : (
                <PatientsList
                  listOfAppointments={listOfAppointments}
                  statusForDoctor={statusForDoctor}
                />
              )}
          </CardWrapper>
        </ContentWrapper>
      </MainWrapper>
    </PageWrapper>
  );
};

export default PatientsPage;
