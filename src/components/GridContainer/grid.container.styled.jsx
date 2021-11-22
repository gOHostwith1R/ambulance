import styled, { css } from 'styled-components';

export const GridContainerStyled = styled.div`
  display: grid;
  gap: ${(props) => props.gap};
  position: relative;
  ${(props) => props.variant === 'timeSlot' && css`
    max-width: 364px;
    grid-template-columns: repeat(auto-fill, max(104px));
  `};
`;
