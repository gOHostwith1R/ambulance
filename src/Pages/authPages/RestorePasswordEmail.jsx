import React from 'react';
import MainWrapper from '../../features/Auth/MainWrapper';
import MainAuth from '../../features/Auth/MainAuth';
import FormRestorePasswordEmail from '../../features/Auth/FormRestorePasswordEmail';

const RestorePasswordEmail = () => (
  <MainAuth>
    <MainWrapper>
      <FormRestorePasswordEmail />
    </MainWrapper>
  </MainAuth>
);

export default RestorePasswordEmail;
