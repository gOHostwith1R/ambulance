import React from 'react';
import styled from 'styled-components';

const PageWrapperStyled = styled.div`
  padding-top: 80px;
`;

const PageWrapper = ({ children }) => (
  <PageWrapperStyled>
    {children}
  </PageWrapperStyled>
);

export default PageWrapper;
