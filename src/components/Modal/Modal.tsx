import React from 'react';
import { useDispatch } from 'react-redux';
import {
  ModalButtons, ModalFooter, ModalStyled, ModalSubtitle, ModalWrapper, TextAreaStyled,
} from './Modal.styled';
import { ModalTypes } from './types';
import { Title } from '../Title';
import User from '../../assets/svg/user-icon.svg';
import { Paragraph } from '../Paragraph';
import { Button } from '../Button';
import Multiply from '../../assets/svg/multiply-grey.svg';
import ClipboardBank from '../../assets/svg/clipboard-blank.svg';
import { setChangeArea } from '../../features/Resolutions/redux/resolutionsSlice';

export const Modal = ({ variant, name, handleSetOpenModal }: ModalTypes) => {
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setChangeArea(e.target.value));
  };
  return (
    <ModalWrapper>
      <ModalStyled>
        <Title variant="h2" level={2}>{variant}</Title>
        <ModalSubtitle>
          <img src={User} alt="user-icon" />
          <Paragraph variant="plain-2" font="semiBold">{name}</Paragraph>
        </ModalSubtitle>
        <Paragraph variant="caption" color="#A1ABC9">Resolution</Paragraph>
        <TextAreaStyled onChange={handleChange} />
      </ModalStyled>
      <ModalFooter>
        <ModalButtons>
          <Button
            color="light"
            group="main"
            startIcon={Multiply}
            size="small"
            onClick={() => handleSetOpenModal('')}
          >
            Cancel
          </Button>
          <Button color="primary" group="main" startIcon={ClipboardBank} size="small">Create</Button>
        </ModalButtons>
      </ModalFooter>
    </ModalWrapper>
  );
};
