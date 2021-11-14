import React from 'react';
import {
  PatientCardHeaderStyled,
  PatientCardInfoStyled,
} from '../../Patients/PatientCardHeader/patient.card.header.styled';
import Text from '../../../components/Main/Text';
import TextRoleStatus from '../../../components/Main/TextRoleStatus';
import Image from '../../../components/Main/Image';
import SettingsIcon from '../../../assets/svg/more-vertical.svg';
import Avatar from '../../../assets/image/therapist.png';

const AppointmentsCardHeader = () => (
  <PatientCardHeaderStyled avatar={Avatar}>
    <PatientCardInfoStyled>
      <Text card="true">Joe Milton</Text>
      <TextRoleStatus>
        Therapist
      </TextRoleStatus>
    </PatientCardInfoStyled>
    <Image settingsIcon={SettingsIcon} />
  </PatientCardHeaderStyled>
);

export default AppointmentsCardHeader;
