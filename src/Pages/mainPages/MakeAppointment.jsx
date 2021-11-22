import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../../features/Main/PageWrapper/page.wrapper';
import MainHeader from '../../features/Main/MainHeader';
import HeaderUser from '../../features/Main/HeaderUser';
import UserInfo from '../../features/Main/UserInfo';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import Avatar from '../../assets/image/patient-avatar.png';
import Arrow from '../../assets/svg/arrow-left-gray.svg';
import Indicator from '../../components/Indicator';
import MainWrapper from '../../features/Main/MainWrapper';
import ContentWrapper from '../../features/Main/ContentWrapper';
import FlexContainer from '../../components/FlexContainer';
import ContentHeader from '../../features/Main/ContentHeader';
import FormCreateAppointments from '../../features/Main/FormCreateAppointments';

const MakeAppointmentsPage = () => (
  <PageWrapper>
    <MainHeader>
      <HeaderUser>
        <UserInfo>
          <Title variant="h3">Larry Prinston</Title>
          <Paragraph variant="caption" textAlign="end" color="#A1ABC9">Patient</Paragraph>
        </UserInfo>
        <img src={Avatar} alt="avatar" />
        <Indicator variant="withBorder" status="confirmed" />
      </HeaderUser>
    </MainHeader>
    <MainWrapper>
      <ContentWrapper>
        <FlexContainer gap="8px">
          <Link to="/appointments" style={{ textDecoration: 'none' }}>
            <Paragraph variant="plain-1" font="regular" group="link">Doctors</Paragraph>
          </Link>
          <img src={Arrow} alt="arrow" style={{ transform: 'rotate(180deg)' }} />
          <Paragraph variant="plain-1" font="regular">Make an appointment</Paragraph>
        </FlexContainer>
        <ContentHeader>
          <Title variant="h2" margin="72px 0 0 0" width="8px" height="14px">Make an appointment</Title>
        </ContentHeader>
        <FormCreateAppointments />
      </ContentWrapper>
    </MainWrapper>
  </PageWrapper>
);

export default MakeAppointmentsPage;
