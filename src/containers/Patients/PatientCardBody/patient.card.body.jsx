import React from 'react';
import {
  PatientCardBodyDescriptionStyled,
  PatientCardBodyStyled,
  PatientCardBodyTimeStyled,
} from './patient.card.body.styled';
import TimeIcon from '../../../assets/svg/clock.svg';
import ListIcon from '../../../assets/svg/list.svg';
import Text from '../../../components/Main/Text';
import Image from '../../../components/Main/Image';

const PatientCardBody = () => (
  <PatientCardBodyStyled>
    <PatientCardBodyTimeStyled>
      <Image timeIcon={TimeIcon} />
      <Text title="true" titleCard="true">Thu Sept 10, 2021 4 pm – 5 pm</Text>
    </PatientCardBodyTimeStyled>
    <PatientCardBodyDescriptionStyled>
      <Image listIcon={ListIcon} />
      <Text description="true">We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels</Text>
    </PatientCardBodyDescriptionStyled>
  </PatientCardBodyStyled>
);

export default PatientCardBody;
