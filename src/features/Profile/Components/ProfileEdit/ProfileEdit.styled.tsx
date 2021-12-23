import styled from 'styled-components';

export const ProfileEditStyled = styled.form`
  position: relative;
  display: flex;
  gap: 40px;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 1085px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  top: 47px;
  left: 52px;
  @media(max-width: 768px) {
    top: 24px;
    left: 24px;
  }
`;

export const EditFormStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 32px;
  @media (max-width: 1085px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: baseline;
  gap: 32px;
`;
