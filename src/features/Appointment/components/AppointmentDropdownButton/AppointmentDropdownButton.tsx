import React from 'react';
import { Link } from 'react-router-dom';
import { AppointmentDropdownButtonStyled } from './AppointmentDropdownButton.styled';
import { Dropdown } from '../../../../components';
import { DICTIONARY } from '../../../../core/consts/dictionary';
import ButtonToIcon from '../ButtonToIcon';
import { DropdownItemsStyled } from '../../../../components/Dropdown/Dropdown.styled';

const AppointmentDropdownButton: React.FC = () => (
  <AppointmentDropdownButtonStyled>
    <Dropdown name="Show:" mainItem="Upcoming">
      {DICTIONARY.dropdownTime
        .map((item) => <DropdownItemsStyled key={item}>{item}</DropdownItemsStyled>)}
    </Dropdown>
    <Link to="/appointments/make">
      <ButtonToIcon />
    </Link>
  </AppointmentDropdownButtonStyled>
);

export default AppointmentDropdownButton;
