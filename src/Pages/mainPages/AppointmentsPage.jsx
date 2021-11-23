import React from 'react';
import { Link } from 'react-router-dom';
import { useWindowSize } from 'react-use';
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
import Avatar from '../../assets/image/patient-avatar.png';
import Plus from '../../assets/svg/plus.svg';
import PlusBlue from '../../assets/svg/plusBlue.svg';
import { CardHeaderStyled } from '../../features/Main/Card/card.styled';
import SettingsIcon from '../../assets/svg/more-vertical.svg';
import TimeIcon from '../../assets/svg/clock.svg';
import HeartIcon from '../../assets/svg/heart.svg';
import { DICTIONARY } from '../../core/consts/dictionary';

const AppointmentsPage = () => {
  const { width } = useWindowSize();
  document.title = DICTIONARY.pageName.appointments;
  return (
    <PageWrapper>
      <MainHeader>
        <HeaderUser>
          <UserInfo>
            <Title variant="h3">Larry Prinston</Title>
            <Paragraph variant="caption" textAlign="end" color="#A1ABC9">{DICTIONARY.roles.patient}</Paragraph>
          </UserInfo>
          <img src={Avatar} alt="avatar" />
          <Indicator variant="withBorder" status="confirmed" />
        </HeaderUser>
      </MainHeader>
      <MainWrapper>
        <ContentWrapper>
          <ButtonWrapper>
            <Link to="/patients">
              <Button variant="contained" color="light" group="main">{DICTIONARY.pageName.profile}</Button>
            </Link>
            <Button variant="contained" color="primary" group="main">{DICTIONARY.pageName.appointments}</Button>
            <Button variant="contained" color="light" group="main" display="768px">{DICTIONARY.pageName.resolutions}</Button>
          </ButtonWrapper>
          <ContentHeader>
            <Title variant="h2">My Appointments</Title>
            <FlexContainer gap={`${width < 768 ? '12px' : '48px'}`} margin="0 4vh 0 0">
              <Dropdown name="Show:" mainItem="Upcoming">
                <DropdownItemStyled>Upcoming</DropdownItemStyled>
                <DropdownItemStyled>Later</DropdownItemStyled>
                <DropdownItemStyled>Now</DropdownItemStyled>
              </Dropdown>
              <Link to="/make-appointments">
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
            <Card>
              <CardHeaderStyled>
                <FlexContainer gap="16px">
                  <img src={Avatar} alt="avatar" />
                  <FlexContainer direction="column" alignItems="flex-start">
                    <Title variant="h3">Jane Cooper</Title>
                    <FlexContainer gap="8px">
                      <Paragraph variant="caption">Therapist</Paragraph>
                    </FlexContainer>
                  </FlexContainer>
                </FlexContainer>
                <img src={SettingsIcon} alt="settings" />
              </CardHeaderStyled>
              <FlexContainer direction="column" gap="16px" alignItems="flex-start" margin="24px 32px 40px 32px">
                <FlexContainer gap="18px">
                  <img src={TimeIcon} alt="time-icon" />
                  <Title variant="h4">Thu Sept 10, 2021 4 pm – 5 pm</Title>
                </FlexContainer>
                <FlexContainer gap="20px">
                  <img src={HeartIcon} alt="heart-icon" />
                  <Paragraph variant="plain-2" font="regular">Headache, pant</Paragraph>
                </FlexContainer>
              </FlexContainer>
            </Card>
          </CardWrapper>
        </ContentWrapper>
      </MainWrapper>
    </PageWrapper>
  );
};

export default AppointmentsPage;
