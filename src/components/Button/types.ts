import React from 'react';

export interface ButtonProps {
  children?: React.ReactNode | JSX.Element,
  color: string,
  group: string,
  disabled?: boolean,
  startIcon?: string,
}

export interface ButtonStyledProps {
  startIcon?: string,
  group: string,
  color: string,
  disabled?: boolean,
}
