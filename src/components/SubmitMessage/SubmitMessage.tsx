import React from 'react';
import { SubmitMessageStyled } from './SubmitMessage.styled';
import { Paragraph } from '../Paragraph';
import { SubmitMessageProps } from './types';

export const SubmitMessage: React.FC <SubmitMessageProps> = ({ variant }) => (
  <SubmitMessageStyled variant={variant}>
    <Paragraph variant="plain-1" font="semiBold" status="success">
      Success message goes here
    </Paragraph>
    <Paragraph variant="caption" color="#FFFFFF">
      We show this message if something awesome has happened. You are awesome too
    </Paragraph>
  </SubmitMessageStyled>
);
