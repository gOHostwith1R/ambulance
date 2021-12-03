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
import SettingsIcon from '../../assets/svg/more-vertical.svg';
import TimeIcon from '../../assets/svg/clock.svg';
import ListIcon from '../../assets/svg/list.svg';
import { CardHeaderStyled } from '../../features/Main/Card/card.styled';
import Card from '../../features/Main/Card';
import { DICTIONARY } from '../../core/consts/dictionary';
import { appointmentSelector, getListOfAppointmentsDoctor, setStatus } from '../../store/slices/appointmentSlice';
import CustomLoader from '../../components/Loader';
import { getRefreshToken, getUserProfile, userSelector } from '../../store/slices/userSlice';
import formatISOtoUTC from '../../helpers/formatISOtoUTC';

const PatientsPage = () => {
  useTitle(DICTIONARY.pageName.patients);
  const dispatch = useDispatch();
  const { listOfAppointments, statusForDoctor } = useSelector(appointmentSelector);
  const { userProfile, error } = useSelector(userSelector);
  useEffect(() => {
    dispatch(setStatus());
    dispatch(getListOfAppointmentsDoctor());
    dispatch(getUserProfile());
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
            {statusForDoctor === '' || statusForDoctor === 'loading' ? <CustomLoader /> : listOfAppointments.map((item) => {
              const { patient } = item;
              const dateVisit = formatISOtoUTC(item.visit_date);
              return (
                <Card key={item.visit_date}>
                  <CardHeaderStyled>
                    <FlexContainer gap="16px">
                      <Avatar variant="card" src={patient.photo} alt="avatar" />
                      <FlexContainer direction="column" alignItems="flex-start">
                        <Title variant="h3" level={3}>{`${patient.first_name} ${patient.last_name}`}</Title>
                        <FlexContainer gap="8px">
                          <Indicator status={item.status} />
                          <Paragraph variant="caption" color="#A1ABC9">{`Appointment is ${item.status}`}</Paragraph>
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
                      <img src={ListIcon} alt="time-icon" />
                      <Paragraph variant="plain-2" font="regular">
                        {item.reason}
                      </Paragraph>
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

export default PatientsPage;
