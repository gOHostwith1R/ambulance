import styled from 'styled-components';

export const FooterStyled = styled.footer`
  display: flex;
  grid-area: footer;
  align-self: center;
  gap: 12px;
  @media(max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;
