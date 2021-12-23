import React from 'react';

export interface TitleProps {
  children?: React.ReactNode | JSX.Element,
  variant: string,
  level?: 1 | 2 | 3 | 4 | 5 | 6,
  color?: string,
}
