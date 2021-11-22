import React from 'react';
import MainWrapper from '../../features/Auth/MainWrapper';
import MainAuth from '../../features/Auth/MainAuth';
import FormRestoreMessage from '../../features/Auth/FormRestoreMessage';

const RestoreMessage = () => (
  <MainAuth>
    <MainWrapper>
      <FormRestoreMessage />
    </MainWrapper>
  </MainAuth>
);

export default RestoreMessage;
