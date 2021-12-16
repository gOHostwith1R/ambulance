import React from 'react';
import {
  CardAvatarDescriptionWrapper, CardBody,
  CardDate, CardHeaderStyled, CardHeaderTitleSubtitle, CardReason,
} from '../../../../layouts/Card/Card.styled';
import { Avatar, Paragraph, Title } from '../../../../components';
import SettingsIcon from '../../../../assets/svg/more-vertical.svg';
import TimeIcon from '../../../../assets/svg/clock.svg';
import HeartIcon from '../../../../assets/svg/heart.svg';
import Card from '../../../../layouts/Card';
import { AppointmentCardProps } from './types';

const AppointmentCard: React.FC <AppointmentCardProps> = ({ item, doctor, dateVisit }) => (
  <Card>
    <CardHeaderStyled>
      <CardAvatarDescriptionWrapper>
        <Avatar variant="card" src={doctor.photo} alt="avatar" />
        <CardHeaderTitleSubtitle>
          <Title variant="h3" level={3}>{`${doctor.first_name} ${doctor.last_name}`}</Title>
          <Paragraph variant="caption">{doctor.specialization_name}</Paragraph>
        </CardHeaderTitleSubtitle>
      </CardAvatarDescriptionWrapper>
      <img src={SettingsIcon} alt="settings" />
    </CardHeaderStyled>
    <CardBody>
      <CardDate>
        <img src={TimeIcon} alt="time-icon" />
        <Title variant="h4" level={4}>{dateVisit}</Title>
      </CardDate>
      <CardReason>
        <img src={HeartIcon} alt="heart-icon" />
        <Paragraph variant="plain-2" font="regular">{item.reason}</Paragraph>
      </CardReason>
    </CardBody>
  </Card>
);

export default AppointmentCard;
