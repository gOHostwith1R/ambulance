import React from 'react';
import { TimeSlotStyled } from './TimeSlot.styled';
import { TimeSlotProps } from './types';

const TimeSlot: React.FC <TimeSlotProps> = ({
  time, status, onClick,
}) => (
  <TimeSlotStyled
    status={status}
    onClick={onClick}
    disabled={!status && true}
  >
    {time}
  </TimeSlotStyled>
);

export default TimeSlot;

/*
  id={id}
    disabled={status === 'disabled'}
    status={status}
    onClick={onClick}
    active={id && 'active'}
 */
