import styled from 'styled-components';

export const AccountParagraphStyled = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 140%;
  margin-top: 0;
  color: #A1ABC9;
  margin-bottom: ${(props) => (props.marginEmail ? '40px' : '0')};
  @media(max-width: 768px) {
    margin-bottom: ${(props) => (props.marginEmail ? '24px' : '0')};
  }
`;
