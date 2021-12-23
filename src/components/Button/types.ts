import React from 'react';
import {SaveChangeProfileTypes} from "../../features/Profile/types";

export interface ButtonProps {
  children?: React.ReactNode | JSX.Element,
  color: string,
  group: string,
  disabled?: boolean,
  startIcon?: string,
  filling?: string,
  size?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  type?: 'submit' | 'button' | 'reset'
}

export interface ButtonStyledProps {
  startIcon?: string,
  group: string,
  color: string,
  disabled?: boolean,
  filling?: string,
  size?: string,
}
