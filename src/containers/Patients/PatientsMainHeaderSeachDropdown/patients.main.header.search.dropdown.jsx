import React from 'react';
import { PatientsMainHeaderSearchSearchDropdownStyled } from './patients.main.header.search.search.dropdown.styled';
import Search from '../../../components/Main/Search';
import Dropdown from '../../../components/Main/Dropdown';

const PatientsMainHeaderSearchDropdown = () => (
  <PatientsMainHeaderSearchSearchDropdownStyled>
    <Search />
    <Dropdown />
  </PatientsMainHeaderSearchSearchDropdownStyled>
);

export default PatientsMainHeaderSearchDropdown;
