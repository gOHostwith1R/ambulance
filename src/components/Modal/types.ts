import React from 'react';

export interface ModalTypes {
  variant: string,
  name: string,
  handleSetOpenModal: (elem: string) => void,
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
