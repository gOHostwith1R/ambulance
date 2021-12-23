import { SerializedError } from '@reduxjs/toolkit';

export interface ResolutionsSliceTypes {
  status: 'pending' | 'fulfilled' | 'rejected',
  error: null | string | SerializedError,
  listOfResolutions: []
  textResolutions: '',
}
