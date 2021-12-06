import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getUserProfile, signUpUser } from '../../store/slices/userSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const registrationRequest = useCallback(async (data) => {
    await dispatch(signUpUser(data));
    await dispatch(getUserProfile());
  }, [dispatch]);

  return { registrationRequest };
};
