import styled, { css } from 'styled-components';

export const LinkToPageStyled = styled.span`
  margin: ${(props) => props.margin};
  display: ${(props) => props.display};
  ${(props) => props.variant === 'auth' && css`
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 130%;
    text-decoration-line: underline;

    color: #7297FF;
`};
`;
