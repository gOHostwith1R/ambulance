import React from 'react';
import { SubmitMessageStyled } from './submit.message.styled';
import Paragraph from '../Paragraph';

const SubmitMessage = ({ variant }) => (
  <SubmitMessageStyled variant={variant}>
    <Paragraph variant="plain-1" font="semiBold" status="success">
      Success message goes here
    </Paragraph>
    <Paragraph variant="caption" color="#FFFFFF">
      We show this message if something awesome has happened. You are awesome too
    </Paragraph>
  </SubmitMessageStyled>
);

export default SubmitMessage;
