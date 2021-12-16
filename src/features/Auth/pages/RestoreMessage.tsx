import React from 'react';
import { useTitle } from 'react-use';
import MainWrapper from '../MainWrapper';
import MainAuth from '../MainAuth';
import FormRestoreMessage from '../FormRestoreMessage';
import { DICTIONARY } from '../../../core/consts/dictionary';

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
