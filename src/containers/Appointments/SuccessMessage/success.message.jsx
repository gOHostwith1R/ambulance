import React, { useState } from 'react';
import { SuccessMessageStyled } from './success.message.styled';
import Text from '../../../components/Main/Text';
import TextRoleStatus from '../../../components/Main/TextRoleStatus';
import CheckCircle from '../../../assets/svg/check-circle.svg';
import Multiply from '../../../assets/svg/multiply.svg';
import Image from '../../../components/Main/Image';

const SuccessMessage = () => {
  const [visibility, setVisibility] = useState(true);
  console.log(visibility);
  return (
    <SuccessMessageStyled checkCircle={CheckCircle} visibility={visibility.toString()}>
      <Text success="true">
        Success message goes here
        <Image multiply={Multiply} onClick={() => setVisibility(!visibility)} />
      </Text>
      <TextRoleStatus success="true">
        We show this message if something awesome has happened. You are awesome too
      </TextRoleStatus>
    </SuccessMessageStyled>
  );
};

export default SuccessMessage;
