import styled, { css } from 'styled-components';
import Logo from '../../../assets/svg/logo.svg';
import AvatarDoctor from '../../../assets/image/avatar-doctor.png';

export const ImageStyled = styled.svg`
    ${(props) => props.logo && css`
      background: url(${Logo}) no-repeat center;
      width: 26px;
      height: 32px;
      margin-right: 14px;
      padding-left: 2px;
    `}
    
    ${(props) => props.patientAvatar && css`
      background: url(${props.patientAvatar}) no-repeat center;
      width: 40px;
      height: 40px;
    `}
    
    ${(props) => props.avatarDoctor && css`
      background: url(${AvatarDoctor}) no-repeat center;
      width: 40px;
      height: 40px;
    `}

    ${(props) => props.settingsIcon && css`
      background: url(${props.settingsIcon}) no-repeat center;
      width: 40px;
      height: 40px;
    `}

    ${(props) => props.timeIcon && css`
      background: url(${props.timeIcon}) no-repeat center;
      width: 20px;
      height: 20px;
      @media(max-width: 768px) {
        width: 30px;
      }
    `}

    ${(props) => props.listIcon && css`
      background: url(${props.listIcon}) no-repeat center;
      width: 60px;
      height: 40px;
      @media(max-width: 1056px) {
        width: 28px;
      }
      @media(max-width: 768px) {
        width: 48px;
      }
      @media(max-width: 499px) {
        width: 71px;
      }
    `}

    ${(props) => props.emptyIcon && css`
      background: url(${props.emptyIcon}) no-repeat center;
      width: 120px;
      height: 120px;
      padding-bottom: 32px;
    `}

    ${(props) => props.heart && css`
      background: url(${props.heart}) no-repeat center;
      width: 20px;
      height: 18px;
    `}

    ${(props) => props.multiply && css`
      background: url(${props.multiply}) no-repeat;
      width: 24px;
      height: 24px;
      cursor: pointer;
      position: absolute;
      top: 8px;
      right: 28px;
    `}
`;
