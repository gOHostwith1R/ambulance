import React from 'react';

export interface TimeSlotProps {
  time: JSX.Element,
  status: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  id: string,
  active?: string,
}

export interface TimeSlotStyledProps {
  status: string,
  active: string,
}
