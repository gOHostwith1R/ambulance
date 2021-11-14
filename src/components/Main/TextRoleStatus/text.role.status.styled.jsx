import styled from 'styled-components';

export const TextRoleStatusStyled = styled.span`
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;

  color: ${(props) => (props.success ? '#FFFFFF' : '#A1ABC9')};
  align-self: flex-end;
  margin-left: ${(props) => props.status && '15px'};
  overflow: hidden;
  @media(max-width: 768px) {
    font-size: 12px;
  }
`;
