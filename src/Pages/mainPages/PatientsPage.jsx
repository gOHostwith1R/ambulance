import React from 'react';
import { Link } from 'react-router-dom';
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
import Avatar from '../../assets/image/avatar-doctor.png';
import Indicator from '../../components/Indicator';
import SettingsIcon from '../../assets/svg/more-vertical.svg';
import TimeIcon from '../../assets/svg/clock.svg';
import ListIcon from '../../assets/svg/list.svg';
import { CardHeaderStyled } from '../../features/Main/Card/card.styled';
import Card from '../../features/Main/Card';

const PatientsPage = () => (
  <PageWrapper>
    <MainHeader>
      <HeaderUser>
        <UserInfo>
          <Title variant="h3">Miranda Nelson</Title>
          <Paragraph variant="caption" textAlign="end" color="#A1ABC9">Doctor</Paragraph>
        </UserInfo>
        <img src={Avatar} alt="avatar" />
        <Indicator variant="withBorder" status="confirmed" />
      </HeaderUser>
    </MainHeader>
    <MainWrapper>
      <ContentWrapper>
        <ButtonWrapper>
          <Link to="/appointments">
            <Button variant="contained" color="primary" group="main">Patients</Button>
          </Link>
          <Button variant="contained" color="light" group="main">Resolutions</Button>
        </ButtonWrapper>
        <ContentHeader>
          <Title variant="h2">My Patients</Title>
          <FlexContainer gap="48px" margin="0 4vh 0 0">
            <Search />
            <Dropdown name="Sort by:" mainItem="Date">
              <DropdownItemStyled>Date</DropdownItemStyled>
              <DropdownItemStyled>Name</DropdownItemStyled>
              <DropdownItemStyled>Status</DropdownItemStyled>
            </Dropdown>
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
                    <Indicator status="confirmed" />
                    <Paragraph variant="caption" color="#A1ABC9">Appointment is confirmed</Paragraph>
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
                <img src={ListIcon} alt="time-icon" />
                <Paragraph variant="plain-2" font="regular">We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels</Paragraph>
              </FlexContainer>
            </FlexContainer>
          </Card>
        </CardWrapper>
      </ContentWrapper>
    </MainWrapper>
  </PageWrapper>
);

export default PatientsPage;
