import styled from 'styled-components';
import Image404 from '../../../../assets/image/404.jpg';

export const NotFoundWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  align-items: center;
  justify-content: end;
  padding: 0 40px 8vh 40px;
  background-image: url(${Image404});
  background-repeat: no-repeat;
  background-position: center;
  @media(max-width: 800px) {
    background-size: 70%;
    padding-bottom: 25vh;
  }
`;
