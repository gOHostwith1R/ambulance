import styled from 'styled-components';

export const FooterStyled = styled.footer`
  display: flex;
  grid-area: footer;
  @media(max-width: 768px) {
    flex-direction: column;
  }
`;
