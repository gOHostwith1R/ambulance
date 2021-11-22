import React from 'react';
import { TimeSlotStyled } from './time.slot.styled';

const TimeSlot = ({
  time, status, onClick, id,
}) => (
  <TimeSlotStyled
    id={id}
    disabled={status === 'disabled' && 'disabled'}
    status={status}
    onClick={onClick}
    active={id && 'active'}
  >
    {time}
  </TimeSlotStyled>
);

export default TimeSlot;
