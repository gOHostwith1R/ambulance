import styled from 'styled-components';

export const TitleH2Styled = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #202225;
  margin: 0 0 4vh 0;
  position: relative;
  padding-left: ${(props) => props.arrow && '36px'};
  @media(max-width: 768px) {
    font-size: 20px;
  }
`;
