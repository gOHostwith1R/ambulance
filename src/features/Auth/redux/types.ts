import { SerializedError } from '@reduxjs/toolkit';

export interface UserSliceTypes {
  status: 'pending' | 'resolved' | 'rejected' | string,
  error: null | number | SerializedError | unknown,
  auth: null | boolean
  userProfile: UserProfileTypes
  role: 'Patient' | 'Doctor' | string,
}

export interface UserSignInProps {
  userName?: string,
  password?: string,
}

export interface UserSignUpProps {
  firstName?: string
  lastName?: string
  userName?: string,
  password?: string,
  confirmPassword?: string,
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
