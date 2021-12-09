import React, { useState, Children } from 'react';
import { useWindowSize } from 'react-use';
import Slider from '../../assets/svg/sliders-v-alt.svg';
import {
  DropdownStyled,
  DropdownHeaderStyled,
  DropdownMainItemStyled,
  DropdownContentsStyled,
  DropdownItemStyled,
} from './dropdown.styled';

const DropdownHeader = ({ name }) => (
  <DropdownHeaderStyled>{name}</DropdownHeaderStyled>
);

const DropdownMainItem = ({ mainItem, onClick }) => (
  <DropdownMainItemStyled onClick={onClick}>{mainItem}</DropdownMainItemStyled>
);

export const Dropdown = ({ name, mainItem, children }) => {
  const [visible, setVisible] = useState(false);
  const { width } = useWindowSize();
  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <DropdownStyled onClick={handleClick}>
      {width > 768
        ? (
          <>
            <DropdownHeader name={name} />
            <DropdownMainItem mainItem={mainItem} />
          </>
        )
        : <img src={Slider} alt="slider" />}
      <DropdownContentsStyled visible={visible}>
        {Children.map(children, (item) => (
          <DropdownItemStyled>{item}</DropdownItemStyled>
        ))}
      </DropdownContentsStyled>
    </DropdownStyled>
  );
};
