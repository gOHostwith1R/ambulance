import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkAuthStyled = styled(Link)`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 130%;
  text-decoration-line: underline;
  color: #7297FF;
  margin-left:  ${({ link }) => (link ? '12px' : '')};
  margin: ${({ forgot }) => forgot && '30px 0'} ;
  ${(props) => props.mail && css`
    font-weight: ${({ weight }) => weight || 600};
    margin-left: ${({ margin }) => margin || '12px'};
`};
  
  @media(max-width: 768px) {
    margin-left: 0;
    font-weight: 500;
  }
`;
