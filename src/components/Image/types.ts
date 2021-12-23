import React from 'react';

export interface ImageProps {
  variant: string,
  img: string,
  onClick?: React.MouseEventHandler<SVGSVGElement>,
}
