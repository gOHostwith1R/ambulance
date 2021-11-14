import React, { useState } from 'react';
import {
  DropdownContentsStyled,
  DropdownHeaderStyled, DropdownItemStyled,
  DropdownMainItemStyled,
  DropdownStyled,
} from '../../../components/Main/Dropdown/dropdown.styled';

const Dropdown = () => {
  const [visible, setVisible] = useState(false);
  return (
    <DropdownStyled>
      <DropdownHeaderStyled>Show:</DropdownHeaderStyled>
      <DropdownMainItemStyled appointments="true" onClick={() => setVisible(!visible)}>Upcoming</DropdownMainItemStyled>
      <DropdownContentsStyled visible={visible}>
        <DropdownItemStyled>Upcoming</DropdownItemStyled>
        <DropdownItemStyled>Later</DropdownItemStyled>
      </DropdownContentsStyled>
    </DropdownStyled>
  );
};

export default Dropdown;
