import React from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from 'react-use';
import { useSelector } from 'react-redux';
import PageWrapper from '../../features/Main/PageWrapper/page.wrapper';
import MainHeader from '../../features/Main/MainHeader';
import HeaderUser from '../../features/Main/HeaderUser';
import UserInfo from '../../features/Main/UserInfo';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import Avatar from '../../components/Avatar';
import Arrow from '../../assets/svg/arrow-left-gray.svg';
import Indicator from '../../components/Indicator';
import MainWrapper from '../../features/Main/MainWrapper';
import ContentWrapper from '../../features/Main/ContentWrapper';
import FlexContainer from '../../components/FlexContainer';
import ContentHeader from '../../features/Main/ContentHeader';
import FormCreateAppointments from '../../features/Main/FormCreateAppointments';
import { DICTIONARY } from '../../core/consts/dictionary';
import { userSelector } from '../../store/slices/userSlice';

const MakeAppointmentsPage = () => {
  useTitle(DICTIONARY.pageName.makeAppointment);
  const { userProfile } = useSelector(userSelector);
  return (
    <PageWrapper>
      <MainHeader>
        <HeaderUser>
          <UserInfo>
            <Title variant="h3" level={3}>{`${userProfile.first_name} ${userProfile.last_name}`}</Title>
            <Paragraph variant="caption" textAlign="end" color="#A1ABC9">{userProfile.role_name}</Paragraph>
          </UserInfo>
          <Avatar src={userProfile.photo} variant="header-avatar" alt="avatar" />
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
            <Paragraph variant="plain-1" font="regular">{DICTIONARY.pageName.makeAppointment}</Paragraph>
          </FlexContainer>
          <ContentHeader>
            <Title variant="h2" level={2} margin="72px 0 0 0" width="8px" height="14px">{DICTIONARY.pageName.makeAppointment}</Title>
          </ContentHeader>
          <FormCreateAppointments />
        </ContentWrapper>
      </MainWrapper>
    </PageWrapper>
  );
};

export default MakeAppointmentsPage;
