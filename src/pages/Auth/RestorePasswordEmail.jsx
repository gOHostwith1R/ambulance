import React from 'react';
import MainWrapper from '../../containers/Auth/MainWrapper';
import TitleH2 from '../../components/Auth/TitleH2';
import arrowLeftIcon from '../../assets/svg/arrow-left-gray.svg';
import MainAuth from '../../containers/Auth/MainAuth';
import AccountParagraph from '../../components/Auth/AccountParagraph/account.paragraph';
import SpanImageLink from '../../components/Auth/SpanImageLink';
import FormRestorePasswordEmail from '../../containers/Auth/FormRestorePasswordEmail';

const RestorePasswordEmail = () => (
  <MainAuth>
    <MainWrapper>
      <FormRestorePasswordEmail>
        <TitleH2 arrow="true">
          <SpanImageLink arrowLeftIcon={arrowLeftIcon} />
          Restore Password
        </TitleH2>
        <AccountParagraph marginEmail>
          Please use your email address, and we’ll send you the link to reset your password
        </AccountParagraph>
      </FormRestorePasswordEmail>
    </MainWrapper>
  </MainAuth>
);

export default RestorePasswordEmail;
