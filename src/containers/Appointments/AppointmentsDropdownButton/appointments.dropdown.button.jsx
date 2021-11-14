import React from 'react';
import { AppointmentsDropdownButtonStyled } from './appointments.dropdown.button.styled';
import Dropdown from '../Dropdown';
import MainButton from '../../../components/Main/MainButton';
import Plus from '../../../assets/svg/plus.svg';

const AppointmentsDropdownButton = () => (
  <AppointmentsDropdownButtonStyled>
    <Dropdown />
    <MainButton primary="true" plus={Plus}>Create an appointment</MainButton>
  </AppointmentsDropdownButtonStyled>
);

export default AppointmentsDropdownButton;
