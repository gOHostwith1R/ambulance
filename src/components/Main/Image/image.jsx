import React from 'react';
import { ImageStyled } from './image.styled';

const Image = ({
  logo, avatarDoctor, settingsIcon, timeIcon, listIcon,
  emptyIcon, patientAvatar, heart, multiply, onClick,
}) => (
  <ImageStyled
    logo={logo}
    avatarDoctor={avatarDoctor}
    settingsIcon={settingsIcon}
    timeIcon={timeIcon}
    listIcon={listIcon}
    emptyIcon={emptyIcon}
    patientAvatar={patientAvatar}
    heart={heart}
    multiply={multiply}
    onClick={onClick}
  />
);

export default Image;
