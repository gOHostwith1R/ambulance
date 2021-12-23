import styled from 'styled-components';

export const CardStyled = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  width: 400px;
  @media(max-width: 1056px) {
    max-width: none;
    flex-grow: 1;
  }
`;

export const CardHeaderStyled = styled.div`
  display: flex;
  padding: 24px 31px;
  border-bottom: 1px solid #DCE0EC;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 768px) {
    padding: 16px 19px 16px 24px;
  }
`;

export const CardAvatarDescriptionWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const CardHeaderTitleSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin: 24px 32px 40px 32px;
`;

export const CardDate = styled.div`
  display: flex;
  gap: 18px;
`;

export const CardReason = styled.div`
  display: flex;
  gap: 20px;
`;

export const SettingsIconWrapper = styled.div`
  cursor: pointer;
`;
