import React from 'react';
import {
  PatientCardBodyDescriptionStyled, PatientCardBodyStyled,
  PatientCardBodyTimeStyled,
} from '../../Patients/PatientCardBody/patient.card.body.styled';
import Image from '../../../components/Main/Image';
import TimeIcon from '../../../assets/svg/clock.svg';
import Text from '../../../components/Main/Text';
import Heart from '../../../assets/svg/heart.svg';

const AppointmentsCardBody = () => (
  <PatientCardBodyStyled>
    <PatientCardBodyTimeStyled>
      <Image timeIcon={TimeIcon} />
      <Text title="true" titleCard="true">Thu Sept 10, 2021 4 pm – 5 pm</Text>
    </PatientCardBodyTimeStyled>
    <PatientCardBodyDescriptionStyled>
      <Image heart={Heart} />
      <Text description="true">Headache, pant</Text>
    </PatientCardBodyDescriptionStyled>
  </PatientCardBodyStyled>
);

export default AppointmentsCardBody;
