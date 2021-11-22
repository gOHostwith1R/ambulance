import styled from 'styled-components';

export const CardWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 32px 0 0;
  overflow: auto;
  justify-content: space-between;
  @media(max-width: 768px) {
    padding: 0;
  }
`;
