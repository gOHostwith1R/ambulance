import React from 'react';
import { Link } from 'react-router-dom';
import { LinksWrapperStyled } from './LinksWrapperStyled';
import { Paragraph } from '../../../../components';
import Arrow from '../../../../assets/svg/arrow-left-gray.svg';
import { DICTIONARY } from '../../../../core/consts/dictionary';

const LinksWrapper: React.FC = () => (
  <LinksWrapperStyled>
    <Link to="/appointments" style={{ textDecoration: 'none' }}>
      <Paragraph variant="plain-1" font="regular" group="link">Doctors</Paragraph>
    </Link>
    <img src={Arrow} alt="arrow" style={{ transform: 'rotate(180deg)' }} />
    <Paragraph variant="plain-1" font="regular">{DICTIONARY.pageName.makeAppointment}</Paragraph>
  </LinksWrapperStyled>
);

export default LinksWrapper;
