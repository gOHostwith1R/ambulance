import React, { useState } from 'react';
import {
  DropdownStyled,
  DropdownHeaderStyled,
  DropdownMainItemStyled,
  DropdownContentsStyled,
  DropdownItemStyled,
} from './dropdown.styled';

const Dropdown = () => {
  const [visible, setVisible] = useState(false);
  return (
    <DropdownStyled>
      <DropdownHeaderStyled>Sort by:</DropdownHeaderStyled>
      <DropdownMainItemStyled onClick={() => setVisible(!visible)}>Date</DropdownMainItemStyled>
      <DropdownContentsStyled visible={visible}>
        <DropdownItemStyled>Date</DropdownItemStyled>
        <DropdownItemStyled>Name</DropdownItemStyled>
      </DropdownContentsStyled>
    </DropdownStyled>
  );
};
export default Dropdown;
