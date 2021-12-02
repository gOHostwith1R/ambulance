import React from 'react';
import { useTitle } from 'react-use';
import MainWrapper from '../MainWrapper';
import MainAuth from '../MainAuth';
import FormRestorePasswordEmail from '../FormRestorePasswordEmail';
import { DICTIONARY } from '../../../core/consts/dictionary';

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
