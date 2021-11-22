import styled from 'styled-components';

export const FormStyled = styled.form`
  width: ${(props) => props.width || '368px'};
  grid-area: form;
  overflow: ${(props) => props.overflow};
  display: flex;
  flex-direction: column;
  @media(max-width: 768px) {
   width: auto;
  }
`;
