import styled from 'styled-components';

export const MainWrapperStyled = styled.div`
  background-color: #f9faff;
  max-width: 560px;
  margin: 0 0 0 auto;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 7vh 96px 1vh 96px;
  align-items: flex-start;
  display: grid;
  grid-template-areas:
  "."
  "."
  "form"
  "."
  "."
  "footer";
  @media(max-width: 768px) {
    max-width: none;
    min-height: auto;
    height: calc(100vh - 72px);
    width: 100vw;
    border-radius: 24px 24px 0 0;
    padding: 32px 32px 0 32px;
    margin-top: 72px;
    grid-template-areas: 
  "form"
  "."
  "footer";
  }
`;
