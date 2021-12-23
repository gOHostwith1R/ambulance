import React from 'react';
import { useDispatch } from 'react-redux';
import { SearchStyled } from './Search.styled';
import { onChangeInput } from '../../features/Patient/redux/PatientSlice';

export const Search: React.FC = () => {
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(onChangeInput(e.target.value));
  };
  return (
    <SearchStyled placeholder="Search" onChange={handleChange} />
  );
};
