import React from 'react';
import { PatientDropdownSearchStyled } from './PatientDropdownSearch.styled';
import { Search, Dropdown } from '../../../../components';
import { DICTIONARY } from '../../../../core/consts/dictionary';
import { DropdownItemsStyled } from '../../../../components/Dropdown/Dropdown.styled';

const PatientDropdownSearch = () => (
  <PatientDropdownSearchStyled>
    <Search />
    <Dropdown name="Sort by:" mainItem="Date">
      {DICTIONARY.dropdownSortPatients.map((item) => (
        <DropdownItemsStyled key={item}>{item}</DropdownItemsStyled>
      ))}
    </Dropdown>
  </PatientDropdownSearchStyled>
);

export default PatientDropdownSearch;
