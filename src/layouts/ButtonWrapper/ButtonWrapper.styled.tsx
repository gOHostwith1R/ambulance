import styled from 'styled-components';

export const ButtonWrapperStyled = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 35px;
  @media(max-width: 768px) {
    gap: 24px;
    justify-content: space-between;
  }
  @media(max-width: 512px) {
    gap: 6px;
  }
`;
