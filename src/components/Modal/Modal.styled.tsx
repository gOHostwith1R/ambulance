import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  border-radius: 16px;
  width: 560px;
  height: 467px;
`;

export const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  padding: 40px;
  gap: 24px;
`;

export const ModalSubtitle = styled.div`
  display: flex;
  gap: 16px;
`;

export const TextAreaStyled = styled.textarea`
  background: #FFFFFF;
  padding: 16px 28px 16px 24px;
  border: 1px solid #DCE0EC;
  box-sizing: border-box;
  box-shadow: 0 4px 32px rgba(218, 228, 255, 0.16);
  border-radius: 8px;
  height: 100%;
`;

export const ModalFooter = styled.div`
  background: #F9FAFF;
  padding: 32px 40px;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;
