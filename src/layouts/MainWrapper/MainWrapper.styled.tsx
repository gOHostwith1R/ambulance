import styled from 'styled-components';

export const MainWrapperStyled = styled.main`
  background: #E4EBFF;
  padding: 0 64px 48px;
  height: calc(100vh - 128px);
  @media(max-width: 768px) {
    padding: 0;
    height: calc(100vh - 80px);
  }
`;
