import styled from 'styled-components';

export const PatientCardHeaderStyled = styled.div`
  display: flex;
  padding: 24px 31px;
  border-bottom: 1px solid #DCE0EC;
  justify-content: space-between;
  background: url(${(props) => props.avatar}) no-repeat 32px 24px;
`;

export const PatientCardInfoStyled = styled.div`
  padding-left: 72px;
  position: relative;
  @media(max-width: 768px) {
    padding-left: 48px;
  }
`;
