import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SubmitMessageStyled } from './SubmitMessage.styled';
import { Paragraph } from '../Paragraph';
import { SubmitMessageProps } from './types';
import Multiply from '../../assets/svg/multiply.svg';
import { Image } from '../Image';
import CheckCircle from '../../assets/svg/check-circle.svg';
import { setMakeAppointmentStatus } from '../../features/Appointment/redux/appointmentSlice';

export const SubmitMessage: React.FC <SubmitMessageProps> = ({ variant, typeError = '' }) => {
  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState(true);
  const handleClick = () => {
    setVisibility(!visibility);
    dispatch(setMakeAppointmentStatus());
  };
  return (
    <SubmitMessageStyled variant={variant} visibility={visibility.toString()}>
      <Image variant="checkCircle" img={CheckCircle} />
      {variant === 'success'
        ? (
          <>
            <Paragraph variant="plain-1" font="semiBold" status="success">
              Success message goes here
            </Paragraph>
            <Paragraph variant="caption" color="#FFFFFF">
              We show this message if something awesome has happened. You are awesome too
            </Paragraph>
          </>
        )
        : (
          <>
            <Paragraph variant="plain-1" font="semiBold" status="success">
              Error message goes here
            </Paragraph>
            {typeError === ''
              ? (
                <Paragraph variant="caption" color="#FFFFFF">
                  We show this message if something irreparable has happened.
                  But there is nothing irreparable
                </Paragraph>
              )
              : (
                <Paragraph variant="caption" color="#FFFFFF">
                  Date and time not free
                </Paragraph>
              )}
          </>
        )}
      <Image variant="multiply" onClick={handleClick} img={Multiply} />
    </SubmitMessageStyled>
  );
};
