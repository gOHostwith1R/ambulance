import React from 'react';
import { LinkAuthStyled } from './link.auth.styled';

const LinkAuth = ({
  children, forgot, to, mail, margin, weight, link,
}) => (
  <LinkAuthStyled
    forgot={forgot}
    to={to}
    mail={mail}
    margin={margin}
    weight={weight}
    link={link}
  >
    {children}
  </LinkAuthStyled>
);

export default LinkAuth;
