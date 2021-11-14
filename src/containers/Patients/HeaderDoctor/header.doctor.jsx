import React from 'react';
import { HeaderDoctorStyled } from './header.doctor.styled';
import Image from '../../../components/Main/Image';
import Text from '../../../components/Main/Text';
import TextRoleStatus from '../../../components/Main/TextRoleStatus';
import DoctorInfo from '../DoctorInfo/doctor.info';
import Indicator from '../../../components/Main/Indicator';

const HeaderDoctor = () => (
  <HeaderDoctorStyled>
    <DoctorInfo>
      <Text title="true">Miranda Nelson</Text>
      <TextRoleStatus>Doctor</TextRoleStatus>
    </DoctorInfo>
    <Image avatarDoctor />
    <Indicator avatar color="#34C197" />
  </HeaderDoctorStyled>
);

export default HeaderDoctor;
