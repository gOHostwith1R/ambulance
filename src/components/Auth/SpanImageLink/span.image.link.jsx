import React from 'react';
import { Link } from 'react-router-dom';
import { SpanImageStyledLink } from './span.image.styled.link';

const SpanImageLink = ({ arrowLeftIcon }) => (
  <Link to="/sign-up">
    <SpanImageStyledLink arrowLeftIcon={arrowLeftIcon} />
  </Link>
);

export default SpanImageLink;
