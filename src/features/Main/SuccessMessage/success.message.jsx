import React, { useState } from 'react';
import { SuccessMessageStyled } from './success.message.styled';
import CheckCircle from '../../../assets/svg/check-circle.svg';
import Multiply from '../../../assets/svg/multiply.svg';
import Image from '../../../components/Image';
import Paragraph from '../../../components/Paragraph';

const SuccessMessage = () => {
  const [visibility, setVisibility] = useState(true);
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
      <Image variant="background" top="13px" right="25px" position="absolute" width="25px" onClick={handleClick} img={Multiply} />
    </SuccessMessageStyled>
  );
};

export default SuccessMessage;
