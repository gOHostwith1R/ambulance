import React from 'react';
import { TimeSlotContainerStyled } from './TimeSlotContainer.styled';

export interface TimeSlotContainerProps {
  children: React.ReactNode | JSX.Element,
}

const TimeSlotContainer: React.FC <TimeSlotContainerProps> = ({ children }) => (
  <TimeSlotContainerStyled>
    {children}
  </TimeSlotContainerStyled>
);

export default TimeSlotContainer;
