import React from 'react';
import { useTitle } from 'react-use';
import MainWrapper from './components/MainWrapper';
import MainAuth from './components/MainAuth';
import FormRestoreMessage from './components/FormRestoreMessage';
import { DICTIONARY } from '../../core/consts/dictionary';

const RestoreMessage = () => {
  useTitle(DICTIONARY.authForm.restorePassword);
  return (
    <MainAuth>
      <MainWrapper>
        <FormRestoreMessage />
      </MainWrapper>
    </MainAuth>
  );
};

export default RestoreMessage;
