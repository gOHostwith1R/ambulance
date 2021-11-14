import React from 'react';
import MainWrapper from '../../containers/Auth/MainWrapper';
import TitleH2 from '../../components/Auth/TitleH2';
import SpanImageLink from '../../components/Auth/SpanImageLink';
import arrowLeftIcon from '../../assets/svg/arrow-left-gray.svg';
import AccountParagraph from '../../components/Auth/AccountParagraph/account.paragraph';
import MainAuth from '../../containers/Auth/MainAuth';
import FormRestoreMessage from '../../containers/Auth/FormRestoreMessage';
import { LinkAuthStyled } from '../../components/Auth/LinkAuth/link.auth.styled';

const RestoreMessage = () => (
  <MainAuth>
    <MainWrapper>
      <FormRestoreMessage>
        <TitleH2 arrow="true">
          <SpanImageLink arrowLeftIcon={arrowLeftIcon} />
          Restore Password
        </TitleH2>
        <AccountParagraph marginEmail>
          An email has been sent to
          <LinkAuthStyled to="#" mail="true" weight="normal" margin="2px">example@exam.com</LinkAuthStyled>
          .
          Check your inbox, and click the reset link provided.
        </AccountParagraph>
      </FormRestoreMessage>
    </MainWrapper>
  </MainAuth>
);

export default RestoreMessage;
