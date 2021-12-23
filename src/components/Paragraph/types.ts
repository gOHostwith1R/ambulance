import React from 'react';

export interface ParagraphProps {
  children?: React.ReactNode | JSX.Element,
  variant: string,
  font?: string,
  color?: string,
  status?: string,
  group?: string,
}

export interface ParagraphPropsStyled {
  variant: string,
  font?: string,
  color?: string,
  status: string,
  group: string,
}
