import styled from 'styled-components';

export const UserInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  text-align: end;
  @media(max-width: 768px) {
    display: none;  
  }
`;
