import React from 'react';
import { PatientCardHeaderStyled, PatientCardInfoStyled } from './patient.card.header.styled';
import Text from '../../../components/Main/Text';
import TextRoleStatus from '../../../components/Main/TextRoleStatus';
import Indicator from '../../../components/Main/Indicator';
import SettingsIcon from '../../../assets/svg/more-vertical.svg';
import Image from '../../../components/Main/Image';
import Avatar from '../../../assets/image/avatar-patient.png';

const PatientCardHeader = () => (
  <PatientCardHeaderStyled avatar={Avatar}>
    <PatientCardInfoStyled>
      <Text card="true">Jane Cooper</Text>
      <TextRoleStatus status="true">
        <Indicator color="#34C197" status="true" />
        Appointment is confirmed
      </TextRoleStatus>
    </PatientCardInfoStyled>
    <Image settingsIcon={SettingsIcon} />
  </PatientCardHeaderStyled>
);
export default PatientCardHeader;
