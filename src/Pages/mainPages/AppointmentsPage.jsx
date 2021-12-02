import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTitle, useWindowSize } from 'react-use';

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
import { Dropdown } from '../../components/Dropdown';
import { DropdownItemStyled } from '../../components/Dropdown/dropdown.styled';
import CardWrapper from '../../features/Main/CardWrapper';
import Card from '../../features/Main/Card';
import PageWrapper from '../../features/Main/PageWrapper/page.wrapper';
import UserInfo from '../../features/Main/UserInfo';
import Paragraph from '../../components/Paragraph';
import Indicator from '../../components/Indicator';
import Avatar from '../../components/Avatar';
import Plus from '../../assets/svg/plus.svg';
import PlusBlue from '../../assets/svg/plusBlue.svg';
import { CardHeaderStyled } from '../../features/Main/Card/card.styled';
import SettingsIcon from '../../assets/svg/more-vertical.svg';
import TimeIcon from '../../assets/svg/clock.svg';
import HeartIcon from '../../assets/svg/heart.svg';
import { DICTIONARY } from '../../core/consts/dictionary';
import { appointmentSelector, getListOfAppointmentsPatient, setStatus } from '../../store/slices/appointmentSlice';
import CustomLoader from '../../components/Loader';
import { getRefreshToken, getUserProfile, userSelector } from '../../store/slices/userSlice';
import formatISOtoUTC from '../../helpers/formatISOtoUTC';

const AppointmentsPage = () => {
  const dispatch = useDispatch();
  const { width } = useWindowSize();
  useTitle(DICTIONARY.pageName.appointments);
  const {
    listOfAppointments, statusForPatient,
  } = useSelector(appointmentSelector);
  const { userProfile, error } = useSelector(userSelector);
  useEffect(() => {
    dispatch(setStatus());
    dispatch(getUserProfile());
    dispatch(getListOfAppointmentsPatient());
  }, []);

  useEffect(() => {
    dispatch(getRefreshToken());
  }, [error]);

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
            {userProfile.role_name === 'Patient' ? null
              : (
                <Link to="/patients">
                  <Button variant="contained" color="light" group="main">{DICTIONARY.pageName.profile}</Button>
                </Link>
              )}
            <Button variant="contained" color="primary" group="main">{DICTIONARY.pageName.appointments}</Button>
            <Button variant="contained" color="light" group="main" display="768px">{DICTIONARY.pageName.resolutions}</Button>
          </ButtonWrapper>
          <ContentHeader>
            <Title variant="h2" level={2}>My Appointments</Title>
            <FlexContainer gap={`${width < 768 ? '12px' : '48px'}`} margin="0 4vh 0 0">
              <Dropdown name="Show:" mainItem="Upcoming">
                {DICTIONARY.dropdownTime
                  .map((item) => <DropdownItemStyled key={item}>{item}</DropdownItemStyled>)}
              </Dropdown>
              <Link to="/appointments/make">
                {width < 1024 ? <img src={PlusBlue} alt="plus" />
                  : (
                    <Button variant="contained" color="primary" group="main" startIcon={Plus}>
                      {DICTIONARY.createAppointment.createAppointment}
                    </Button>
                  )}
              </Link>
            </FlexContainer>
          </ContentHeader>
          <CardWrapper>
            {statusForPatient === '' || statusForPatient === 'loading' ? <CustomLoader /> : listOfAppointments.map((item) => {
              const { doctor } = item;
              const dateVisit = formatISOtoUTC(item.visit_date);
              return (
                <Card key={item.visit_date}>
                  <CardHeaderStyled>
                    <FlexContainer gap="16px">
                      <Avatar variant="card" src={doctor.photo} alt="avatar" />
                      <FlexContainer direction="column" alignItems="flex-start">
                        <Title variant="h3" level={3}>{`${doctor.first_name} ${doctor.last_name}`}</Title>
                        <FlexContainer gap="8px">
                          <Paragraph variant="caption">{doctor.specialization_name}</Paragraph>
                        </FlexContainer>
                      </FlexContainer>
                    </FlexContainer>
                    <img src={SettingsIcon} alt="settings" />
                  </CardHeaderStyled>
                  <FlexContainer direction="column" gap="16px" alignItems="flex-start" margin="24px 32px 40px 32px">
                    <FlexContainer gap="18px">
                      <img src={TimeIcon} alt="time-icon" />
                      <Title variant="h4" level={4}>{dateVisit}</Title>
                    </FlexContainer>
                    <FlexContainer gap="20px">
                      <img src={HeartIcon} alt="heart-icon" />
                      <Paragraph variant="plain-2" font="regular">{item.reason}</Paragraph>
                    </FlexContainer>
                  </FlexContainer>
                </Card>
              );
            })}
          </CardWrapper>
        </ContentWrapper>
      </MainWrapper>
    </PageWrapper>
  );
};

export default AppointmentsPage;
