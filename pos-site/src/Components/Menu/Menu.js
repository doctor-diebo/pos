import React from 'react';
import { StyledMenu } from './Menu.styled';

export const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">Home</a>
      <a href="/">Install</a>
      <a href="/">Documentation</a>
      <a href="/">Contribute</a>
    </StyledMenu>
  );
};
