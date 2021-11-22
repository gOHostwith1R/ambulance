import styled from 'styled-components';

export const CardStyled = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  width: 400px;
  @media(max-width: 1056px) {
    max-width: none;
    width: auto;
    flex-grow: 1;
  }
`;

export const CardHeaderStyled = styled.div`
  display: flex;
  padding: 24px 31px;
  border-bottom: 1px solid #DCE0EC;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 768px) {
    padding: 16px 19px 16px 24px;
  }
`;
