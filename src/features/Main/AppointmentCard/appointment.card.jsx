import React from 'react';
import { CardHeaderStyled } from '../Card/card.styled';
import FlexContainer from '../../../components/FlexContainer';
import Avatar from '../../../components/Avatar';
import Title from '../../../components/Title';
import Paragraph from '../../../components/Paragraph';
import SettingsIcon from '../../../assets/svg/more-vertical.svg';
import TimeIcon from '../../../assets/svg/clock.svg';
import HeartIcon from '../../../assets/svg/heart.svg';
import Card from '../Card';

const AppointmentCard = ({ item, doctor, dateVisit }) => (
  <Card>
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

export default AppointmentCard;
