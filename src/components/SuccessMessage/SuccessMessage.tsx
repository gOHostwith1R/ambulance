import React, { useState } from 'react';
import { SuccessMessageStyled } from './SuccessMessage.styled';
import CheckCircle from '../../assets/svg/check-circle.svg';
import Multiply from '../../assets/svg/multiply.svg';
import { Image } from '../Image';
import { Paragraph } from '../Paragraph';

export const SuccessMessage = () => {
  const [visibility, setVisibility] = useState(false);
  const handleClick = () => {
    setVisibility(!visibility);
  };
  return (
    <SuccessMessageStyled checkCircle={CheckCircle} visibility={visibility.toString()}>
      <Paragraph variant="plain-1" font="semiBold" status="success">
        Success message goes here
      </Paragraph>
      <Paragraph variant="caption" status="success">
        We show this message if something awesome has happened. You are awesome too
      </Paragraph>
      <Image variant="background-message" onClick={handleClick} img={Multiply} />
    </SuccessMessageStyled>
  );
};
