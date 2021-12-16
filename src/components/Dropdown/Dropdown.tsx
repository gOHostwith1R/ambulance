import React, { useState, Children } from 'react';
import { useWindowSize } from 'react-use';
import Slider from '../../assets/svg/sliders-v-alt.svg';
import {
  DropdownStyled,
  DropdownHeaderStyled,
  DropdownMainItemStyled,
  DropdownContentsStyled,
  DropdownItemsStyled,
} from './Dropdown.styled';
import {
  DropdownHeaderProps, DropdownMainItemProps, DropdownProps,
} from './types';

const DropdownHeader: React.FC <DropdownHeaderProps> = ({ name }) => (
  <DropdownHeaderStyled>{name}</DropdownHeaderStyled>
);

const DropdownMainItem: React.FC <DropdownMainItemProps> = ({ mainItem }) => (
  <DropdownMainItemStyled>{mainItem}</DropdownMainItemStyled>
);

export const Dropdown: React.FC <DropdownProps> = ({ name, mainItem, children }) => {
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
          <DropdownItemsStyled>{item}</DropdownItemsStyled>
        ))}
      </DropdownContentsStyled>
    </DropdownStyled>
  );
};
