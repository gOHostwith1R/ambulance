import { SerializedError } from '@reduxjs/toolkit';

export interface UserSliceTypes {
  status: 'pending' | 'resolved' | 'rejected' | string,
  error: null | string | SerializedError,
  auth: null | boolean
  userProfile: UserProfileTypes
  role: 'Patient' | 'Doctor' | string,
}

export interface UserSignInProps {
  userName?: null | string,
  password?: null | string,
}

export interface UserSignUpProps {
  firstName?: null | string
  lastName?: null | string
  userName?: null | string,
  password?: null | string,
  confirmPassword?: null | string,
}

export interface UserProfileTypes {
  id: string,
  first_name: string,
  last_name: string,
  photo: string,
  role_name: string
}

export type Status = {
  status: number,
};
