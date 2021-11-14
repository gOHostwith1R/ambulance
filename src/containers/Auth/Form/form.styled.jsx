import styled from 'styled-components';

export const FormStyled = styled.form`
  width: 368px;
  grid-area: form;
  display: flex;
  flex-direction: column;
  @media(max-width: 768px) {
   width: auto;
  }
`;
