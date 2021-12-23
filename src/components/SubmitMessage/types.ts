import React from 'react';
import { SerializedError } from '@reduxjs/toolkit';

export interface SubmitMessageProps {
  variant: string,
  typeError?: null | string | SerializedError | unknown,
  children?: React.ReactNode | JSX.Element,
}

export interface SubmitMessageStyledProps {
  variant: string,
  visibility: string,
}
