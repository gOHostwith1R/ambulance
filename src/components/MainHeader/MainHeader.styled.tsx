import styled from 'styled-components';

export const MainHeaderStyled = styled.div`
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  background: #E4EBFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 64px;
  @media(max-width: 768px) {
    padding: 0 24px;
  }
`;
