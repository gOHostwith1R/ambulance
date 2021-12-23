import React from 'react';

export interface TimeSlotProps {
  time: React.ReactNode | JSX.Element,
  status: boolean,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  id?: string,
  active?: string,
  disabled?: boolean,
}

export interface TimeSlotStyledProps {
  status: boolean,
  active?: string,
}
