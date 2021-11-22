import styled from 'styled-components';

export const FlexContainerStyled = styled.div`
  display: flex;
  align-items:  ${(props) => props.alignItems || 'center'};
  flex-direction: ${(props) => props.direction || 'row'};
  margin: ${(props) => props.margin};
  gap: ${(props) => props.gap};
  justify-content: ${(props) => props.justContent};
  overflow: ${(props) => props.overflow};
  position: ${(props) => props.position};
`;
