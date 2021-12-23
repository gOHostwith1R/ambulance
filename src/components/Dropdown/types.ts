import React from 'react';

export interface DropdownHeaderProps {
  name?: string,
  image?: string,
}

export interface DropdownMainItemProps {
  mainItem?: string,
}

export interface DropdownItemsProps {
  children?: React.ReactNode | JSX.Element
  variant?: string,
}

export interface DropdownProps {
  name?: string,
  mainItem?: string,
  children?: React.ReactNode | JSX.Element,
  image?: string,
  variant?: string
}

export interface DropdownStyledProps {
  children?: React.ReactNode | JSX.Element,
}

export interface DropdownContentsStyledProps {
  visible: boolean,
}
