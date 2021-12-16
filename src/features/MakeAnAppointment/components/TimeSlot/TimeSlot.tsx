import React from 'react';
import { TimeSlotStyled } from './TimeSlot.styled';
import { TimeSlotProps } from './types';

const TimeSlot: React.FC <TimeSlotProps> = ({
  time, status = 'active', onClick, id,
}) => (
  <TimeSlotStyled
    id={id}
    disabled={status === 'disabled'}
    status={status}
    onClick={onClick}
    active={id && 'active'}
  >
    {time}
  </TimeSlotStyled>
);

export default TimeSlot;
