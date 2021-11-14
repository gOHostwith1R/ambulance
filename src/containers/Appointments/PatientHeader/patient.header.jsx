import React from 'react';
import Image from '../../../components/Main/Image';
import Text from '../../../components/Main/Text';
import TextRoleStatus from '../../../components/Main/TextRoleStatus';
import Indicator from '../../../components/Main/Indicator';
import PatientAvatar from '../../../assets/image/patient-avatar.png';
import { HeaderDoctorStyled } from '../../Patients/HeaderDoctor/header.doctor.styled';
import DoctorInfo from '../../Patients/DoctorInfo/doctor.info';

const PatientHeader = () => (
  <HeaderDoctorStyled>
    <DoctorInfo>
      <Text title="true">Larry Prinston</Text>
      <TextRoleStatus>Patient</TextRoleStatus>
    </DoctorInfo>
    <Image patientAvatar={PatientAvatar} />
    <Indicator avatar color="#34C197" />
  </HeaderDoctorStyled>
);

export default PatientHeader;
