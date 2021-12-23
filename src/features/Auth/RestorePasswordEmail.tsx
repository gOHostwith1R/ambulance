import React from 'react';
import { useTitle } from 'react-use';
import MainWrapper from './components/MainWrapper';
import MainAuth from './components/MainAuth';
import FormRestorePasswordEmail from './components/FormRestorePasswordEmail';
import { DICTIONARY } from '../../core/consts/dictionary';

const RestorePasswordEmail = () => {
  useTitle(DICTIONARY.authForm.restorePassword);
  return (
    <MainAuth>
      <MainWrapper>
        <FormRestorePasswordEmail />
      </MainWrapper>
    </MainAuth>
  );
};

export default RestorePasswordEmail;
