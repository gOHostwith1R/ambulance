import React from 'react';

export interface LinkToPageProps {
  children?: React.ReactNode | JSX.Element,
  variant: string,
  type?: string,
}

export interface LinkToPageStyledProps {
  variant: string,
  type?: string,
}
