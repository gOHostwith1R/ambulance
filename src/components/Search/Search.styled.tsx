import styled from 'styled-components';
import SearchIcon from '../../assets/svg/search.svg';

export const SearchStyled = styled.input`
  max-width: 93px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 140%;
  text-align: end;
  border: none;
  ::-webkit-input-placeholder {
    color: #A1ABC9;
  }
  background: url(${SearchIcon}) no-repeat;
  @media(max-width: 768px) {
    ::-webkit-input-placeholder {
      visibility: hidden;
    }
    width: 24px;
  }
`;
