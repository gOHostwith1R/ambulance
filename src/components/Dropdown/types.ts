import React from 'react';

export interface DropdownHeaderProps {
  name: string,
}

export interface DropdownMainItemProps {
  mainItem: string,
}

export interface DropdownItemsProps {
  children?: React.ReactNode | JSX.Element
}

export interface DropdownProps {
  name: string,
  mainItem: string,
  children?: React.ReactNode | JSX.Element,
}

export interface DropdownStyledProps {
  children?: React.ReactNode | JSX.Element,
}

export interface DropdownContentsStyledProps {
  visible: boolean,
}
