import React from 'react';
import { SaveChangeProfileTypes } from '../../types';

export interface ProfileEditTypes {
  children?: React.ReactNode | JSX.Element,
  photo: string,
  editProfile: boolean,
  onSubmit: (params: SaveChangeProfileTypes) => void,
  handleClick: () => void,
}
